import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h1>meals</h1>
      <p>
        <Link href="/meals/share">share</Link>
      </p>
      <p>
        <Link href="/">app</Link>
      </p>
      <p>
        <Link href="/meals/post1">post1</Link>
      </p>
      <p>
        <Link href="/meals/post2">post2</Link>
      </p>
    </>
  );
}
