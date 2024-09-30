"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Navbarr() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Peta Watusampu", href: "/peta-watusampu" },
    { label: "Penyebab", href: "#penyebab" },
    { label: "Dampak", href: "#" }, // Sesuaikan dengan rute yang sesuai
    { label: "Kontak", href: "#kontak" },
  ];
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
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
    <Navbar
      className={`fixed top-0 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-slate-900 flex justify-center gap-x-12 items-center text-white`}
      disableAnimation
      isBordered
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle onClick={() => setIsMenuOpen((prev) => !prev)} />
      </NavbarContent>

      <NavbarContent
        className={`hidden sm:flex mx-auto gap-x-12`}
        justify="center"
      >
        <NavbarItem isActive>
          <Link className="hover:text-orange-400" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="hover:text-orange-400"
            href="peta-watusampu"
            aria-current="page"
            color="warning"
          >
            Peta Watusampu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-orange-400"
            color="foreground"
            href="#penyebab"
          >
            Penyebab
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-orange-400" color="foreground" href="#">
            Dampak
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:text-orange-400"
            color="foreground"
            href="#kontak"
          >
            Kontak
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={`${isMenuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
              onClick={handleMenuItemClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
