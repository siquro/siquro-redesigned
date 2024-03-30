// \"email\": \"admin@siquro.com\",\n    \"password\":  "localhost:8000/auth/login",
// https://pay.siquro.com/auth/login
// pay.siquro.com/auth/login

import { NextRequest, NextResponse } from "next/server";

// admin@siquro.com

// password = "passworDICK"

// import { serialize } from 'cookie';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, password } = req.body;

//   try {
//     const authResponse = await fetch('https://pay.siquro.com/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const contentType = authResponse.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       console.error('Did not receive JSON. Check the URL and endpoint.');
//       // Don't return; if you want to continue execution after logging
//     }

//     if (!authResponse.ok) {
//       const errorResponse = await authResponse.json();
//       return res.status(authResponse.status).json({ message: errorResponse.message || 'Authentication failed' });
//     }

//     const { token } = await authResponse.json();

//     const cookie = serialize('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     });

//     res.setHeader('Set-Cookie', cookie);

//     // Correctly inform the client-side to redirect using the JSON response
//     res.status(200).json({ success: true, redirectUrl: 'https://pay.siquro.com/auth/login' });
//   } catch (error) {
//     console.error('Authentication request failed:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }

import { serialize } from 'cookie';

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

  // const cookie = serialize('token', data.token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   sameSite: 'lax',
  //   path: '/',
  //   maxAge: 60 * 60 * 24 * 7, // 7 days
  // });

  // response.headers.set('Set-Cookie', cookie);


  return NextResponse.json({ success: true, redirectUrl: 'https://pay.siquro.com/auth/login' });
}
