import express from "express";
import { z } from "zod";
import { insertContactSubmissionSchema } from "../shared/schema";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/healthz", (_req, res) => res.status(200).send("ok"));

app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    console.log("Contact form submission received:", validatedData.name, validatedData.email);
    res.json({
      success: true,
      message: "Contact submission received successfully",
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

export default app;
