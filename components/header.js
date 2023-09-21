import Link from "next/link";
import classes from "./header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.ancher}>
        Index
      </Link>
      <Link href="/about"> About</Link>
    </header>
  );
}
