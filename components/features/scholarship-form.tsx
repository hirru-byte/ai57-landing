"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { scholarshipFormSchema, type ScholarshipFormData } from "@/types/forms";

export function ScholarshipForm() {
  const form = useForm<ScholarshipFormData>({
    resolver: zodResolver(scholarshipFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: ScholarshipFormData) => {
    try {
      // Replace with your API endpoint
      const response = await fetch("/api/scholarship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        alert(
          "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể."
        );
      } else {
        throw new Error("Có lỗi xảy ra khi đăng ký");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên *</FormLabel>
              <FormControl>
                <Input placeholder="Nhập họ và tên của bạn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="0123 456 789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Đang đăng ký..." : "Đăng ký ngay"}
        </Button>
      </form>
    </Form>
  );
}
