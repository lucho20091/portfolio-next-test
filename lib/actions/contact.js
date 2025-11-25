"use server";

import { sendTelegramMessage } from "@/lib/utils/telegram"; // Corrected import
import { checkRateLimit } from "@/lib/utils/rate-limit";
import { headers } from "next/headers";

export async function submitContactForm(formData) {
  const ip = headers().get("x-forwarded-for") || "unknown";
  const limit = parseInt(process.env.CONTACT_FORM_RATE_LIMIT || "5", 10);
  const windowMs = parseInt(process.env.CONTACT_FORM_RATE_WINDOW_MS || "3600000", 10); // Default to 1 hour

  if (checkRateLimit(ip, limit, windowMs)) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  try {
    await sendTelegramMessage(formData); // Corrected function call
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Failed to send message to Telegram:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}