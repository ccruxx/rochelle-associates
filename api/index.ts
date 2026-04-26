import express from "express";
import { z } from "zod";
import { insertContactSubmissionSchema } from "../shared/schema";
import { Resend } from "resend";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const NOTIFY_EMAILS = ["Rochelleassociates@yahoo.com", "legalassistant.rochelle@gmail.com"];

const intakeSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(7),
  practiceArea: z.string().min(1),
});

app.get("/healthz", (_req, res) => res.status(200).send("ok"));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = insertContactSubmissionSchema.parse(req.body);
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Rochelle Associates <noreply@updates.rochelle-associates.com>",
      to: NOTIFY_EMAILS,
      subject: `New Contact Form Message — ${name}`,
      html: `
        <h2 style="color:#1a2744;font-family:Georgia,serif;">New Message from Website Contact Form</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Email</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Phone</td><td style="padding:8px 12px;">${phone ? `<a href="tel:${phone}">${phone}</a>` : "Not provided"}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Message</td><td style="padding:8px 12px;">${message}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Submitted</td><td style="padding:8px 12px;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">Sent from rochelle-associates.com contact form</p>
      `,
    });

    res.json({ success: true, message: "Contact submission received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
    }
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/api/intake", async (req, res) => {
  try {
    const { name, phone, practiceArea } = intakeSchema.parse(req.body);
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Rochelle Associates <noreply@updates.rochelle-associates.com>",
      to: NOTIFY_EMAILS,
      subject: `New Lead: ${practiceArea} — ${name}`,
      html: `
        <h2 style="color:#1a2744;font-family:Georgia,serif;">New Intake from Website Widget</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Phone</td><td style="padding:8px 12px;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Practice Area</td><td style="padding:8px 12px;">${practiceArea}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;background:#f5f0e8;">Submitted</td><td style="padding:8px 12px;">${new Date().toLocaleString("en-US",{timeZone:"America/Chicago"})}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">Sent from rochelle-associates.com intake widget</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Validation error" });
    }
    console.error("Intake error:", error);
    res.status(500).json({ success: false, message: "Failed to send notification" });
  }
});

export default app;
