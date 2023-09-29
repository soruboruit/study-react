import Head from 'next/head';
import { Footer } from 'src/components/footer/index.jsx';
import { Main } from 'src/components/main';
import { Header } from 'src/components/header';
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
