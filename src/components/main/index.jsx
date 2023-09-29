import classes from './main.module.css';
import { Links } from '@/components/links';
import { Headline } from '@/components/headline';

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>Pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
