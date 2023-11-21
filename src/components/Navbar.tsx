import React from "react";
import Menu from "./Menu";
import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/">Contacto</Link>
      </div>
      {/* LOGO */}
      <div className=" flex-1 md:text-center">
        <Link href="/">
        <Image src="/chiltepLog2.png" alt="" width={160} height={70} />
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>2212705095</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;