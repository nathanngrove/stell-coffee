"use client";

import React, { useState, useContext } from "react";

type MenuContextObject = {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
};

const MenuContext = React.createContext<MenuContextObject>({
  selectedMenu: "",
  setSelectedMenu: () => {},
});

export function useMenu() {
  return useContext(MenuContext);
}

type MenuProviderProps = {
  children: React.ReactNode;
};

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [selectedMenu, setSelectedMenu] = useState("Coffee and Espresso");

  const menuObject = {
    selectedMenu,
    setSelectedMenu,
  };

  return (
    <MenuContext.Provider value={menuObject}>{children}</MenuContext.Provider>
  );
};

export default MenuProvider;
