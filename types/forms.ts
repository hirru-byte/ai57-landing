// Common form types and schemas

import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]+$/, "Số điện thoại không hợp lệ")
    .optional(),
  message: z
    .string()
    .min(10, "Tin nhắn phải có ít nhất 10 ký tự")
    .max(500, "Tin nhắn không được quá 500 ký tự"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Scholarship registration form schema
export const scholarshipFormSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .regex(/^[0-9+\-\s()]+$/, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").min(1, "Email là bắt buộc"),
});

export type ScholarshipFormData = z.infer<typeof scholarshipFormSchema>;
