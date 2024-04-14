"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import uppercaseAllFirstLetters from "~/utils/uppercaseAllFirstLetters";

function Item() {
  const pathname = usePathname();

  const item = pathname.split("/")[2] || "";

  const formattedItem = uppercaseAllFirstLetters(item);

  return (
    <div>
      <div className="flex flex-col content-center gap-4">
        <div className="text-xl font-medium">{formattedItem}</div>
        <Image
          src="/latte.jpg"
          width={250}
          height={250}
          alt={formattedItem}
          className="size-[250px] rounded-full object-cover"
        ></Image>
      </div>
      <button className="rounded-full bg-orange-550 p-4 font-medium text-white">
        Add to bag
      </button>
    </div>
  );
}

export default Item;
