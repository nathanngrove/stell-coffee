"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useMenu } from "~/context/MenuContextProvider";

type MenuListItemProps = {
  category: string;
};

function MenuListItem({ category }: MenuListItemProps) {
  const router = useRouter();
  const { selectedMenu, setSelectedMenu } = useMenu();

  const redirectId = category.toLowerCase().replaceAll(" ", "-");

  const isSelected = (category: string) =>
    selectedMenu === category ? true : false;

  const handleSelected = () => {
    setSelectedMenu(category);
    router.push(`/menu#${redirectId}`);
  };

  return (
    <>
      <li className={"hover:cursor-pointer"} onClick={() => handleSelected()}>
        <div className="group flex gap-2">
          {isSelected(category) ? (
            <div className="group-hover:bg-cyan-350 bg-orange-550 h-6 w-3 rotate-[30deg] rounded-full "></div>
          ) : null}
          <div
            className={`${isSelected(category) ? "text-orange-550 flex gap-1 font-medium" : "text-stone-300"} group-hover:text-cyan-350`}
          >
            {category}
          </div>
        </div>
      </li>
    </>
  );
}

export default MenuListItem;
