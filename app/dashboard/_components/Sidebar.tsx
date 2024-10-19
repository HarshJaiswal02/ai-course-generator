"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

type MenuItem = {
  id: number;
  name: string;
  icon: ReactNode; // Because the icon is JSX
  path:
    | "/dashboard"
    | "/dashboard/explore"
    | "/dashboard/upgrade"
    | "/dashboard/logout";
};

const Sidebar: React.FC = () => {
  const Menu: MenuItem[] = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <hr className="'my-5" />
      <ul>
        {path ? (
          Menu.map((item) => (
            <Link key={item.id} href={`${item.path}`}>
              <div
                className={`flex items-center gap-2 text-gray-500 p-3 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg ${
                  item.path === path && "bg-gray-200 text-black"
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <h2>{item.name}</h2>
              </div>
            </Link>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
