import { Kodchasan, Montserrat } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import Header from "@/components/header/Header";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-montserrat',
});

const kodchasan = Kodchasan({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', "600", "700"],
  variable: '--font-kodchasan',
});

export const metadata: Metadata = {
  title: "SiQURO",
  description: "Accept payments with us and open up new markets and opportunities in the online payments industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${kodchasan.variable} font-sans`}>
        <Providers>
          <Header/>
          <main className="min-h-screen">
            {children}
            <SpeedInsights />
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
