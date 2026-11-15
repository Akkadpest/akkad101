import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Check API key exists
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set!");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const body = await req.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: body.system,
        messages: body.messages,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Anthropic error:", JSON.stringify(data.error));
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Route error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}