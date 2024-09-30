import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <ul className="w-full h-16 absolute top-0 bg-slate-900 flex justify-center gap-x-12 items-center text-white">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="peta-watusampu">
          <li>Peta Watusampu</li>
        </Link>
        <Link href="#">
          <li>Dampak</li>
        </Link>
        <Link href="3">
          <li>Tentang</li>
        </Link>
        <Link href="#">
          <li>Kontak</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
