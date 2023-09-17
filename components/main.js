import { Inter } from 'next/font/google'
import classes from './main.module.css'
import { Links }from 'components/links'
import { Headline } from 'components/headline'

const inter = Inter({ subsets: ['latin'] })

export  function Main(props) {
  return (
      <main className={`${classes.main} ${inter.className}`}>
        <Headline page={props.page} >
          <code className={classes.code}>Pages/{props.page}.js</code>
        </Headline>
      <Links/>
      </main>
  )
}
