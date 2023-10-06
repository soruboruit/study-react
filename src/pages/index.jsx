import Head from "next/head";
import { Footer } from "src/components/footer/index.jsx";
import { Main } from "src/components/main";
import { Header } from "src/components/header";
import styles from "../styles/Home.module.css"; // 追加

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        onClick={function () {
          alert(123);
        }}
      >
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}

//youtube動画で学んだ　
// テスト勉強で忙しい　ぴぇん　youtube動画で学んでいる　