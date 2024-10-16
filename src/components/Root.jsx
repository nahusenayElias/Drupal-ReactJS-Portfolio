import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
