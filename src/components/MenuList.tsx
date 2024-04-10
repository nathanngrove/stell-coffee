import React from "react";
import MenuListItem from "./MenuListItem";

const menuCategories = [
  "Coffee and Espresso",
  "Blended",
  "Tea",
  "Milk",
  "Other cold drinks",
  "Bakery",
  "Breakfast",
  "Lunch",
  "Beans and stuff",
];

function MenuList() {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {menuCategories.map((category, i) => {
          return <MenuListItem key={i} category={category} />;
        })}
      </ul>
    </>
  );
}

export default MenuList;
