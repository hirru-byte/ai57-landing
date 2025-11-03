import { NextResponse } from "next/server";
import { scholarshipFormSchema } from "@/types/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = scholarshipFormSchema.parse(body);

    // TODO: Replace with your actual email service or database save
    // Example: await sendEmail(validatedData);
    // Example: await saveToDatabase(validatedData);

    console.log("Scholarship registration:", validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message: "Đăng ký thành công",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Scholarship form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Có lỗi xảy ra khi xử lý đăng ký",
      },
      { status: 400 }
    );
  }
}
