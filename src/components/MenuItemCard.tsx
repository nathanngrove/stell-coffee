import Image from "next/image";
import Link from "next/link";
import React from "react";

type MenuItemCardProps = {
  name: string;
  image: string;
};

function MenuItemCard({ name, image }: MenuItemCardProps) {
  const itemUrl = name.replaceAll(" ", "-").toLowerCase();
  return (
    <Link
      href={`/menu/${itemUrl}`}
      className="group flex flex-col items-center gap-4"
    >
      <Image
        className="size-[150px] rounded-full object-cover group-hover:ring-4 group-hover:ring-orange-550"
        src={image}
        height={150}
        width={150}
        alt={name}
        priority={true}
      />
      <div className="group-hover:font-semibold group-hover:text-orange-550">
        {name}
      </div>
    </Link>
  );
}

export default MenuItemCard;
