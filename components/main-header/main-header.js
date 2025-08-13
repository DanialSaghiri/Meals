import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function ManinHeader() {
  return (
    <section className={classes.header}>
      <MainHeaderBackground />
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <div className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">meals</Link>
          </li>
          <li>
            <Link href="/community">community</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
