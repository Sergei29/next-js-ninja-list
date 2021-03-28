import React from "react";
import Navbar from "../../components/Navbar/Navbar";

type Props = {
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => (
  <header>
    <Navbar />
    {children}
  </header>
);

export default Header;
