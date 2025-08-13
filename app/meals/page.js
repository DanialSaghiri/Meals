import Link from "next/link";

import classes from "./page.module.css";

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.highlight}>for you</h1>
        <p>lortfhiifuhopojjvxxdxszse</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your foods</Link>
        </p>
      </header>
      <main></main>
    </>
  );
}
