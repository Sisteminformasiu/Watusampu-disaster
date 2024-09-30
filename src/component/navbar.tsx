"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll event
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener on mount
    window.addEventListener("scroll", controlNavbar);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <div className="">
      <ul
        className={`fixed top-0 w-full h-14 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-slate-900 flex justify-center gap-x-12 items-center text-white`}
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="peta-watusampu">
          <li>Peta Watusampu</li>
        </Link>
        <Link href="#penyebab">
          <li>Penyebab</li>
        </Link>
        <Link href="#">
          <li>Dampak</li>
        </Link>
        <Link href="#">
          <li>Kontak</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
