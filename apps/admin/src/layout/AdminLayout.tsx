import { useEffect, useState } from "react";
import Header from "./../components/Header";
import { Outlet } from "react-router";
import SideBar from "../components/shared/SideBar";
const AdminLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSideBarOpen, setIsSideBarOpen]=useState(false)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width < 1024) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-8 text-center">
        <p className="text-lg font-medium">
          ეს აპლიკაცია მხოლოდ დესკტოპისთვისაა განკუთვნილი
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header isSideBarOpen={isSideBarOpen} toggleSidebar={() => setIsSideBarOpen((prev) => !prev)} ></Header>
      <div className="relative flex flex-1">
        <SideBar isOpen={isSideBarOpen}></SideBar>
        <main className="flex-1 p-6 bg-amber-300 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
