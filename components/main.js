import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Links }from 'components/links'
import { Headline } from 'components/headline'


export  function Main(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <Headline page={props.page}
        >
           <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <div className={styles.center}>{props.page}</div>
      <Links></Links>
      </main>
  );
}