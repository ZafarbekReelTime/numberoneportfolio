import React from "react";
import Xeader from "../components/Xeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <section className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Xeader/>
        <main className="flex-grow">
            <Outlet/>
        </main>
    </section>
  )
};

export default Layout;
