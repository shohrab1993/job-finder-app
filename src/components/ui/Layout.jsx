import React from "react";
import logoImage from "../../assets/logo-sb.png";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <img style={{ width: "60px", height: "60px" }} src={logoImage} alt="" />
      </nav>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        {children}
      </div>
    </>
  );
};

export default Layout;
