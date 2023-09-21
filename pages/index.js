import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer} from '/components/footer'
import { Main } from 'components/main'
import { Header } from 'components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={Home.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main page="index"></Main>
      
      <Footer />
    </div>
  )
}
