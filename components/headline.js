import styles from "../styles/Home.module.css"


export  function Headline(props) {
    return (
        
        <div className={styles.description}>
          <p className ={styles.description}>
            Get started by editing&nbsp;
            {props.children}
          </p>
        </div>

    );

}