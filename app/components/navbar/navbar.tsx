import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-[1280px] mx-auto py-5 w-[90%]">
      <div>HA Media Tools</div>
      <div className="flex justify-between gap-3">
        <Link href="/">Home</Link>
        <Link href="/streaming">Streaming</Link>
        <Link href="/qr-code-generator">QR Code</Link>
      </div>
    </div>
  );
};

export default Navbar;
