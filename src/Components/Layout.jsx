import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Pages/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout-root" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content" style={{ flexGrow: 1, paddingTop: "var(--navbar-height)" }}>
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
