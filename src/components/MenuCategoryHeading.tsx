import React from "react";

type MenuCategoryHeadingProps = {
  heading: string;
};

function MenuCategoryHeading({ heading }: MenuCategoryHeadingProps) {
  return <h3 className="text-lg font-medium">{heading}</h3>;
}

export default MenuCategoryHeading;
