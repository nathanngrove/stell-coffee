"use client";
import React from "react";
import MenuCategoryHeading from "./MenuCategoryHeading";
import MenuItemCard from "./MenuItemCard";

type MenuCategorySectionProps = {
  heading: string;
  items: number;
};

function MenuCategorySection({ heading, items }: MenuCategorySectionProps) {
  let itemsArr: Array<number> = [];
  for (let i = 0; i < items; i++) {
    itemsArr.push(i);
  }
  console.log(itemsArr);

  return (
    <section className="flex w-full flex-col gap-4">
      <MenuCategoryHeading heading={heading} />
      <div className="grid w-full grid-cols-5">
        {itemsArr.map((x, i) => (
          <MenuItemCard key={i} name={"Vanilla Latte"} image={"/latte.jpg"} />
        ))}
      </div>
    </section>
  );
}

export default MenuCategorySection;
