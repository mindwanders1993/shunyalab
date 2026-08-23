import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, track, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // In production, dispatch to Resend email or Discord/Telegram/Slack webhook
    // Log inquiry to standard output for server logging
    console.log("📥 [ShunyaLabs New Inquiry]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      organization: organization || "N/A",
      track,
      budget,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully. A lead engineer will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
