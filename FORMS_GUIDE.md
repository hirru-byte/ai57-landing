# React Hook Form Guide

This project uses `react-hook-form` with `zod` for form validation. This guide shows you how to create and use forms.

## 📦 Installed Packages

- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation

## 📝 Basic Form Example

### 1. Define Your Schema

```typescript
// types/forms.ts
import { z } from "zod";

export const myFormSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
});

export type MyFormData = z.infer<typeof myFormSchema>;
```

### 2. Create Your Form Component

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { myFormSchema, type MyFormData } from "@/types/forms";

export function MyForm() {
  const form = useForm<MyFormData>({
    resolver: zodResolver(myFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: MyFormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên</FormLabel>
              <FormControl>
                <Input placeholder="Nhập tên" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Gửi</Button>
      </form>
    </Form>
  );
}
```

## 🎯 Available Form Components

All components are from `@/components/ui/form`:

- `<Form>` - Form provider wrapper
- `<FormField>` - Individual form field
- `<FormItem>` - Field container
- `<FormLabel>` - Field label
- `<FormControl>` - Input wrapper
- `<FormDescription>` - Helper text
- `<FormMessage>` - Error message

## 📋 Available Input Components

- `<Input>` - Text input (`@/components/ui/input`)
- `<Textarea>` - Textarea (`@/components/ui/textarea`)
- `<Button>` - Submit button (`@/components/ui/button`)

## 🔧 Using the Custom Hook

We have a custom hook for easier form setup:

```typescript
import { useFormWithValidation } from "@/hooks/use-form";
import { myFormSchema } from "@/types/forms";

const form = useFormWithValidation(myFormSchema, {
  defaultValues: {
    name: "",
    email: "",
  },
});
```

## 📨 Example: Contact Form

See `components/features/contact-form.tsx` for a complete example with:

- Multiple fields (name, email, phone, message)
- Validation with Zod
- Vietnamese error messages
- API submission
- Loading states

## 🌐 API Route Example

Forms can submit to API routes:

```typescript
// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/types/forms";

export async function POST(request: Request) {
  const body = await request.json();
  const validatedData = contactFormSchema.parse(body);

  // Save to database or send email
  // ...

  return NextResponse.json({ success: true });
}
```

## ✨ Form Features

### Validation Modes

```typescript
const form = useForm({
  mode: "onChange", // Validate on every change
  // or "onBlur" - Validate on blur
  // or "onSubmit" - Validate on submit (default)
});
```

### Form States

```typescript
form.formState.isSubmitting; // Loading state
form.formState.errors; // Error object
form.formState.isValid; // Form validity
```

### Reset Form

```typescript
form.reset(); // Reset to default values
form.reset({ name: "New Value" }); // Reset with new defaults
```

## 🎨 Customization

### Vietnamese Error Messages

```typescript
z.string().min(2, "Tên phải có ít nhất 2 ký tự");
z.string().email("Email không hợp lệ");
```

### Custom Validation

```typescript
z.string().refine((val) => val.includes("@"), { message: "Phải chứa ký tự @" });
```

## 📚 Resources

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)
- [shadcn/ui Form Docs](https://ui.shadcn.com/docs/components/form)
