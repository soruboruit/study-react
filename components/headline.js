import styles from '@/styles/Home.module.css';
import { Headline } from '/components/Headline';
export  function Headline(props) {
    return (
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            {props.children}
          </p>
        </div>
    );
}