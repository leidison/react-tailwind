import Head from 'next/head'
import Image from 'next/image'
import { getLayout } from '@components/layout/LayoutDefault/LayoutDefault'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

;(Home as any).getLayout = getLayout

export default Home
