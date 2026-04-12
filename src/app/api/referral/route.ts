import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  return NextResponse.json({
    ok: true,
    placeholder: true,
    route: "referral",
    message:
      "Placeholder route only. Full form handling is intentionally deferred to Phase 3.",
    received: data,
  });
}
