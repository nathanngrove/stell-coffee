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
          <div className="grid place-items-center">
            <div className="menu-layout-grid w-9/12">
              <div className="sticky top-0 bg-white">
                <Link href="/menu">
                  <Logo />
                </Link>
              </div>
              <div className="flex items-center justify-end gap-8">
                <SelectALocation />
                <Bag />
              </div>
              <div className="h-full">
                <div className="sticky top-[12rem] flex flex-col gap-24">
                  <Menu />
                  <Footer />
                </div>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </CartProvider>
      </LocationProvider>
    </MenuProvider>
  );
}

export default Layout;
