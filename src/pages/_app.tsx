import "../styles/globals.css"
import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "./layout";
import { NextUIProvider } from "@nextui-org/react";

const App = ({ Component, pageProps, ...rest }: AppProps) => {

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Layout>
          <Component {...pageProps}  />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default App
