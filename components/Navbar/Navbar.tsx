import React from "react";
import NavLink from "../NavLink/NavLink";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninjas list</h1>
      </div>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/ninjas">Ninja listing</NavLink>
    </nav>
  );
};

export default Navbar;
