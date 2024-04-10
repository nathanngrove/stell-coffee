import Link from "next/link";
import React from "react";

function Page() {
  return (
    <>
      <div>
        <section className="min-h-52" id="coffee-&-espresso">
          <h3>Coffee & Espresso</h3>
          <Link href={"/menu/vanilla-latte"}>Vanilla Latte</Link>
        </section>
        <section className="min-h-52" id="blended">
          <h3>Blended</h3>
        </section>
        <section className="min-h-52" id="sandwiches">
          <h3>Sandwiches</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
        <section className="min-h-52" id="other-items">
          <h3>Other Items</h3>
        </section>
      </div>
    </>
  );
}

export default Page;
