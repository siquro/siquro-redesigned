import { Kodchasan, Montserrat } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Image from "next/image";

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
  children, isComingSoon = true,
}: Readonly<{
  children: React.ReactNode;
  isComingSoon?: boolean;
}>) {

  if (isComingSoon) {
    return (
      <html lang="en">
        <body className={`${montserrat.variable} ${kodchasan.variable} font-sans coming-soon-page`}>
          <main className="h-screen bg-black">
            <div className='relative h-screen flex flex-col justify-center items-center bg-hero bg-cover overflow-hidden'>
              <Image src="/reporting_animation/gear_1.png"
                alt="Themeptation"
                className="absolute top-20 right-16 lg:right-[100px] lg:top-[100px] animate-[reversSpin_15s_linear_infinite] w-[120px] h-[120px] md:w-[320px] md:h-[320px]" width={320} height={320} />

              <Image src="/reporting_animation/gear_1.png"
                alt="Themeptation"
                className="absolute top-10 right-10 lg:right-8 lg:top-20 animate-spin-slow  w-[70px] h-[70px] md:w-[190px] md:h-[190px]" width={190} height={190} />

              <Image src="/shapes.svg"
                alt="hero"
                className="absolute w-full left-0 md:left-24 bottom-0 md:bottom-24 animate-blob2" width={150} height={150} />

              <div className="relative z-10 py-6 space-y-16 lg:space-y-32 ">
                <div className="text-center space-y-10">
                  <h3 className={`text-primaryLight text-xl uppercase tracking-wider font-montserrat`}>
                    Coming soon
                  </h3>
                  <h1 className={`title-h1 text-7xl lg:text-9xl font-extrabold coming-soon font-kodchasan`}>We’r blowing up</h1>
                  <p className={`text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto  text-primaryLight font-montserrat`}>
                    We`re under construction. Check back for an update soon. Stay in
                    touch!
                  </p>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${kodchasan.variable} font-sans`}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
            <SpeedInsights />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
