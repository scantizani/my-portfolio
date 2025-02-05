import React from "react";
import Navbar from "./Navbar"; // Importando a Navbar

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Adicionando a Navbar */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
