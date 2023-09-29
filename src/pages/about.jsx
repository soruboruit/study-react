import Head from "next/head";
import { Footer } from "@/components/footer/index.jsx";
import { Main } from "@/components/main";
import { Header } from "@/components/header";
import styles from '../styles/Home.module.css'; // 追加

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
