import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from 'components/footer'
import { Main } from 'components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={Home.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="about"></Main>
      
      <Footer />
    </div>
  )
}
