import Head from 'next/head';
import { Footer } from '/components/footer';
import { Main } from 'components/main';
import { Header } from 'components/header';
import styles from '../styles/Home.module.css'; // 追加

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
