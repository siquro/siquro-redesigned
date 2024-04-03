// \"email\": \"admin@siquro.com\",\n    \"password\":  "localhost:8000/auth/login",
// https://pay.siquro.com/auth/login
// pay.siquro.com/auth/login
// admin@siquro.com
// password = "passworDICK"

import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

const DATA_SORCE_URL = "https://pay.siquro.com/auth/login";

export async function POST(request: NextRequest, response: NextResponse) {
  const { email, password } = await request.json();

  const res = await fetch(DATA_SORCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  cookies().set({
    name: 'http://pay.siquro.com/',
    value: `${data.token}`,
    httpOnly: true,
    path: '/portal/login',
  })

  // return NextResponse.json({ success: true, redirectUrl: 'https://pay.siquro.com/portal/login', token: data.token });
  return NextResponse.json({ success: true, redirectUrl: 'https://pay.siquro.com/portal/login' });
}