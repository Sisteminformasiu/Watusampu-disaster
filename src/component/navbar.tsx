"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

// Function to handle scroll event
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // If scroll down, hide navbar
    setShowNavbar(false);
  } else {
    // If scroll up, show navbar
    setShowNavbar(true);
  }

  setLastScrollY(currentScrollY);
};

useEffect(() => {
  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  return () => {
    // Remove scroll event listener on cleanup
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

const Navbar = () => {
  return (
    <div className="">
      <ul
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
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
