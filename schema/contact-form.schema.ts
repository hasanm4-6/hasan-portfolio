import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name must not exceed 50 characters",
    }),

  email: z
    .string()
    .trim()
    .email({
      message: "Please enter a valid email address",
    }),

  message: z
    .string()
    .trim()
    .min(10, {
      message: "Message must be at least 10 characters long",
    })
    .max(1000, {
      message: "Message must not exceed 1000 characters",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
