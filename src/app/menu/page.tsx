import React from "react";
import MenuCategorySection from "~/components/MenuCategorySection";

function Page() {
  const menu = [
    { name: "Coffee and Espresso", numOfItems: 4 },
    { name: "Blended", numOfItems: 5 },
    { name: "Tea", numOfItems: 7 },
    { name: "Milk", numOfItems: 4 },
    { name: "Other cold drinks", numOfItems: 3 },
    { name: "Bakery", numOfItems: 6 },
    { name: "Breakfast", numOfItems: 3 },
    { name: "Lunch", numOfItems: 5 },
    { name: "Beans and stuff", numOfItems: 1 },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        {menu.map((submenu) => (
          <MenuCategorySection
            heading={submenu.name}
            items={submenu.numOfItems}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
