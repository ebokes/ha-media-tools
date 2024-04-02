"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto py-5 w-[90%]">
        <Link href={"/"}>
          <div>Media Toolkit</div>
        </Link>
        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          <MdMenu className="text-2xl" />
        </div>
        <div className="hidden md:flex justify-between gap-3">
          <Link href="/">
            <div className="hover:text-blue-300">Home</div>
          </Link>
          <Link href="/qr-code-generator">
            <div className="hover:text-blue-300">QR Code</div>
          </Link>
          <Link href="/designer">
            <div className="hover:text-blue-300">Designer</div>
          </Link>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } justify-between gap-3 bg-[#1b2034] px-6 py-3 absolute top-0 right-0 h-screen shadow-slate-500 shadow-sm `}
        >
          <MdOutlineClose
            className="cursor-pointer text-2xl mb-8"
            onClick={toggleMenu}
          />
          <div className="flex flex-col gap-3 items-start">
            <div onClick={toggleMenu}>
              <Link href="/">Home</Link>
            </div>
            <div onClick={toggleMenu}>
              <Link href="/qr-code-generator">QR Code</Link>
            </div>
            <div onClick={toggleMenu}>
              <Link href="/designer">Designer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
