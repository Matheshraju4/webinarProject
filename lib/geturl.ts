// app/page.tsx
"use server";
import { headers } from "next/headers";

export async function geturl() {
  const headersList = headers();
  console.log("headerslist", headersList);
  const host = (await headersList.get("x-custom-host")) || "No host";

  return host;
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  console.log("iam here", host);
  request.headers.set("x-custom-host", host || "");
  return NextResponse.next();
}
