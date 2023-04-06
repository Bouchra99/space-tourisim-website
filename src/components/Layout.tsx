import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
    children: React.ReactNode;
    className ?: string
  }

const Layout: React.FC<Props>  = ( {children}) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
