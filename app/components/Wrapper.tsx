import React from "react";
import Navbar from "./navbar/navbar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <div>
        <div className="max-w-[1280px] w-[90%] mx-auto">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
