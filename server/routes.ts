import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // --- 301 redirects from old Townsquare URLs to current routes ---
  // NOTE: This must be registered BEFORE your normal route handlers.
  const redirects: Record<string, string> = {
    "/about-us.html": "/about",
    "/contact-us.html": "/contact",
    "/criminal-defense.html": "/criminal-defense",
    "/referrals.html": "/",
    "/reviews.html": "/",
    "/tribal-family-law.html": "/family-law",
    "/wills-trusts-and-probate.html": "/family-law",
  };

  app.use((req, res, next) => {
    // normalize to lowercase to avoid case issues
    const path = req.path.toLowerCase();
    const dest = redirects[path];
    if (dest) {
      return res.redirect(301, dest);
    }
    next();
  });

  // (optional) simple health check
  app.get("/healthz", (_req, res) => res.status(200).send("ok"));

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);

      // Save contact submission
      const submission = await storage.createContactSubmission(validatedData);

      res.json({
        success: true,
        message: "Contact submission received successfully",
        id: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Note: GET endpoint removed for security - contact submissions contain PII
  // In production, this would require proper authentication and authorization.

  const httpServer = createServer(app);
  return httpServer;
}
