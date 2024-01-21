import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html lang="en" className='scroll-smooth' suppressHydrationWarning>
      <Head title=''>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-primaryLight dark:bg-primaryDark`} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
