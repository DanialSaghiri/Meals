import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { GetMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "Alle Meals",
  description: "Meals is good",
};

async function Meals() {
  const meals = await GetMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<h2 className={classes.loading}> fetching data......</h2>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
