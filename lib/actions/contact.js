"use server";

export async function submitContactForm(formData) {
  try {
    // Make an internal fetch call to the new API route
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to submit contact form via API route:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}