import { z } from "zod";

export const interests = ["AI", "Oracle ERP", "Both", "Not sure yet"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(160).optional().default(""),
  interest: z.enum(interests, { message: "Please choose an option." }),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more, at least 20 characters.")
    .max(4000, "Please keep your message under 4,000 characters."),
  // Honeypot: real visitors never see or fill this.
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
