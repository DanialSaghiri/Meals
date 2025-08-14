import Image from "next/image";

import classes from "./meal-item.module.css";
import Link from "next/link";

export default function MealItem({ title, creator, image, summary, slug }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={`/images/${image}`} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>Share Details</Link>
        </div>
      </div>
    </article>
  );
}
