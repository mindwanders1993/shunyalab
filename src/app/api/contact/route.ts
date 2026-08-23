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

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[ShunyaLabs Inquiry] ${name} - ${organization ? organization : "New Lead"}`,
          from_name: "ShunyaLabs Inbound",
          name,
          email,
          organization: organization || "N/A",
          service_track: track,
          budget_range: budget,
          message,
        }),
      });

      const result = await response.json();
      if (!result.success) {
        console.error("Web3Forms submission error:", result);
        throw new Error(result.message || "Failed to dispatch email.");
      }
    } else {
      console.warn("⚠️ WEB3FORMS_ACCESS_KEY not configured in environment. Logging inquiry:");
      console.log("📥 [ShunyaLabs New Inquiry]", {
        timestamp: new Date().toISOString(),
        name,
        email,
        organization: organization || "N/A",
        track,
        budget,
        message,
      });
    }

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
      { error: error.message || "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
