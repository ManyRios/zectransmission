import React from "react";
import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full appback">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
