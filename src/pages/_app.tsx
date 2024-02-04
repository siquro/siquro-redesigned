import "../styles/globals.css"
import type { AppProps } from 'next/app';
import { Kodchasan, Montserrat } from 'next/font/google';
import Layout from "./layout";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "500", "600","700", "800"],
  variable: '--font-montserrat',
});

const kodchasan = Kodchasan({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', "700"],
  variable: '--font-kodchasan',
});

const App = ({ Component, pageProps, ...rest }: AppProps) => {

  return (
    <main className={`${montserrat.variable} ${kodchasan.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

export default App
