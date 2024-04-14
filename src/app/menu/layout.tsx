import Link from "next/link";
import React from "react";
import Bag from "~/components/Bag";
import Footer from "~/components/Footer";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
import SelectALocation from "~/components/SelectALocation";
import CartProvider from "~/context/CartContextProvider";
import LocationProvider from "~/context/LocationContextProvider";
import MenuProvider from "~/context/MenuContextProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <LocationProvider>
        <CartProvider>
          <header className="grid w-full grid-cols-2 place-items-center pb-4 pt-4">
            <Link href="/menu" className="place-self-start">
              <Logo />
            </Link>
            <div className="flex flex-grow gap-4 justify-self-end">
              <SelectALocation />
              <Bag />
            </div>
          </header>
          <div className="flex">
            <div className="mb-4 flex w-full gap-4">
              <aside>
                <Menu />
              </aside>
              <div className="h-full w-[2px] bg-stone-100"></div>
              <main className="w-full">{children}</main>
            </div>
          </div>
        </CartProvider>
      </LocationProvider>
    </MenuProvider>
  );
}

export default Layout;
