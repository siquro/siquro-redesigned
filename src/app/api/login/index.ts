// \"email\": \"admin@siquro.com\",\n    \"password\":  "localhost:8000/auth/login",
// https://pay.siquro.com/auth/login
// pay.siquro.com/auth/login

// admin@siquro.com

// password = "passworDICK"


import { serialize } from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== 'POST') {
  //   // Only accept POST requests
  //   return res.status(405).json({ message: 'Method Not Allowed' });
  // }

  const { email, password } = req.body;

  try {
    // Make a POST request to the third-party authentication service using global fetch
    const authResponse = await fetch('https://pay.siquro.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const contentType = authResponse.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Did not receive JSON. Check the URL and endpoint.');
      return;
    }

    const res = await authResponse.json();

    if (!authResponse.ok) {
      // If the authentication service responds with an error (e.g., wrong credentials)
      const errorResponse = await authResponse.json();
      return res.status(authResponse.status).json({ message: errorResponse.message || 'Authentication failed' });
    }

    console.log('Login success:', authResponse);


    // Set the received token in a secure, httpOnly cookie
    const cookie = serialize('token', res, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    res.setHeader('Set-Cookie', cookie);

    // Respond with a JSON object that includes the URL to which the client should be redirected
    res.status(200).json({ success: true, redirectUrl: 'https://pay.siquro.com/auth/login' });
  } catch (error) {
    console.error('Authentication request failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
