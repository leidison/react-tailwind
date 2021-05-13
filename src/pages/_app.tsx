import { FC } from 'react'
import Head from 'next/head'
import '../styles/globals.css'

const getDefaultLayout: FC<any> = (page: FC) => <>{page}</>

function MyApp({ Component, pageProps }) {
  const getLayout = (Component as any).getLayout || getDefaultLayout

  return (
    <>
      <Head>
        <title>PetraSIG</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
