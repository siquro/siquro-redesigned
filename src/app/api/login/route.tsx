// \"email\": \"admin@siquro.com\",\n    \"password\":  "localhost:8000/auth/login",
// https://pay.siquro.com/auth/login
// pay.siquro.com/auth/login

// admin@siquro.com

// password = "passworDICK"

// const resend = new Resend(process.env.AUTH_SESSION_URL);
// const baseUrl = process.env.AUTH_SESSION_URL ? `https://${process.env.AUTH_SESSION_URL}` : "";


import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie"; 


// const baseUrl = "https://pay.siquro.com";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("req", req);
    console.log("req method", req.method);
  
    console.log("res", res);
    if (req.method === "POST") {
      const { email, password } = req.body;
  
      try {
        const tokenResponse = await fetch("https://pay.siquro.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (tokenResponse.ok) {
          const tokenData = await tokenResponse.json();
  
          // Set the token as a cookie
          res.setHeader(
            "Set-Cookie",
            serialize("token", tokenData.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production", // Ensures the cookie is only sent over HTTPS in production
              sameSite: "strict",
              maxAge: 60 * 60 * 24, // Set the cookie to expire in 1 day (adjust as needed)
              path: "/", // Specify the path of the cookie
            })
          );
  
          return res.status(200).json({ success: true, redirectTo: 'https://siquro.com/' });
        } else {
          // If the request fails, handle the error accordingly
          const errorData = await tokenResponse.json();
          throw new Error(`Failed to retrieve token: ${errorData.message}`);
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
}
