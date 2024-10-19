import React, { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
type DashboardLayoutProps = {
  children: ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className=" md:w-64 hidden md:block bg-slate-300">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
