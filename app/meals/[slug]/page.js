import Link from "next/link";

export default function Some({ params }) {
  return (
    <>
      <h1>{params.slug}</h1>
      <p>
        <Link href="/meals">meals</Link>
      </p>
    </>
  );
}
