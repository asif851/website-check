"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteSettings } from "@/config/menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mx-auto sticky top-0 shadow-sm container rounded-md px-10">
      <div className="wrapper flex flex-wrap items-center justify-between">
        <Link href="/" className="w-36">
          {/* <Image src="/images/logo.png" alt="logo" width={150} height={50} /> */}
          <h1 className="block"> {siteSettings.company.name} </h1>
        </Link>
        <button
          className="block md:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div
          className={`fixed top-0 left-0 mg-10 h-full bg-white  transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:flex md:items-center md:gap-4`}
        >
          <nav className="flex flex-col md:flex-row items-center md:gap-4 p-4 md:p-0">
            {siteSettings.headerMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.link}
                className="block md:inline-block mt-2 md:mt-0"
                onClick={() => setMenuOpen(false)}
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {siteSettings.activeLogin && (
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-end gap-3">
                <Button asChild className="" size="lg">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
