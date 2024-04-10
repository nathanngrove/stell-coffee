"use client";

import { usePathname } from "next/navigation";
import React from "react";

function Item() {
  const pathname = usePathname();

  const item = pathname.split("/")[2] || "";

  return <div>{item}</div>;
}

export default Item;
