import Link from "next/link";

import logoImg from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
            <NavLink href="/meals">meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">community</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
