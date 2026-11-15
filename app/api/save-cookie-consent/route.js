import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  // Example DB save (replace with your DB)
  console.log("Cookie consent saved:", body);
fetch("/api/save-cookie-consent", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    preferences,
    date: new Date().toISOString(),
    userAgent: navigator.userAgent,
  }),
});

  return NextResponse.json({ success: true });
}
