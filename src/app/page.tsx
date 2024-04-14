import Link from "next/link";
import Footer from "~/components/Footer";

export default function HomePage() {
  return (
    <>
      <main className="">
        <Link href="/menu">Order Pickup</Link>
      </main>
    </>
  );
}
