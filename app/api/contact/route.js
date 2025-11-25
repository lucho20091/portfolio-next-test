import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/utils/rate-limit";
import { sendTelegramMessage } from "@/lib/utils/telegram";

export async function POST(request) {
  try {
    const formData = await request.json();
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    const limit = parseInt(process.env.CONTACT_FORM_RATE_LIMIT || "5", 10);
    const windowMs = parseInt(
      process.env.CONTACT_FORM_RATE_WINDOW_MS || "3600000", // Default to 1 hour
      10
    );

    if (checkRateLimit(ip, limit, windowMs)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await sendTelegramMessage(formData);
    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}