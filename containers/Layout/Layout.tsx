import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
