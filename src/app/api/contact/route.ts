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

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    let dispatched = false;

    // 1. Dispatch to Discord Webhook if configured
    if (discordWebhookUrl) {
      try {
        const discordRes = await fetch(discordWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "ShunyaLabs Inbound",
            avatar_url: "https://shunyalab.vercel.app/biswajit.png",
            embeds: [
              {
                title: "🚀 New Client Inquiry Received",
                color: 15418782, // Brand accent color
                fields: [
                  { name: "👤 Client Name", value: name, inline: true },
                  { name: "📧 Work Email", value: email, inline: true },
                  { name: "🏢 Company / Org", value: organization || "Not Specified", inline: true },
                  { name: "🛠️ Track", value: track.toUpperCase(), inline: true },
                  { name: "💰 Budget Range", value: budget, inline: true },
                  { name: "📝 Project Scope & Details", value: message },
                ],
                footer: { text: "ShunyaLabs Inbound Engine" },
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        });

        if (discordRes.ok) dispatched = true;
      } catch (err) {
        console.error("Failed to send Discord webhook:", err);
      }
    }

    // 2. Dispatch to Telegram if configured
    if (telegramBotToken && telegramChatId) {
      try {
        const telegramText = 
`🚀 *New ShunyaLabs Inquiry*

👤 *Client:* ${name}
📧 *Email:* ${email}
🏢 *Company:* ${organization || "N/A"}
🛠️ *Track:* ${track}
💰 *Budget:* ${budget}

📝 *Message:*
${message}`;

        const telegramRes = await fetch(
          `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: telegramText,
              parse_mode: "Markdown",
            }),
          }
        );

        if (telegramRes.ok) dispatched = true;
      } catch (err) {
        console.error("Failed to send Telegram notification:", err);
      }
    }

    if (!dispatched) {
      console.warn("⚠️ No active webhook (DISCORD_WEBHOOK_URL or TELEGRAM_BOT_TOKEN+TELEGRAM_CHAT_ID) configured.");
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
