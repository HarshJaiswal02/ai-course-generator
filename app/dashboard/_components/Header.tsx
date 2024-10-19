import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={100} height={50} />
      <UserButton />
    </div>
  );
};

export default Header;
