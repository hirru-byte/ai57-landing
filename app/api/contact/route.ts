import { NextResponse } from "next/server";
import { contactFormSchema } from "@/types/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    // TODO: Replace with your actual email service or database save
    // Example: await sendEmail(validatedData);
    // Example: await saveToDatabase(validatedData);

    console.log("Contact form submission:", validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "Tin nhắn đã được gửi thành công",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi xử lý form",
      },
      { status: 400 }
    );
  }
}
