import styles from "../styles/Home.module.css"

export  function Headline(props) {
  console.log(props);
    return (
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/about.js</code>
          </p>
          
        </div>
    );
}