import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>

      <Footer />
    </div>
  );
}
