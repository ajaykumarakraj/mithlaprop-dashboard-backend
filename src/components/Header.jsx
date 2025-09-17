// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm py-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo/Title */}

        <span className="navbar-brand h3 mb-0"> <img src="./logo.png" height={50} /> CRM Dashboard</span>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-3 text-white">



          {/* User Info */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://i.pravatar.cc/30"
              alt="User Avatar"
              className="rounded-circle"
              width={30}
              height={30}
            />
            <div className="d-none d-sm-block">
              <div style={{ fontSize: "14px" }}>John Doe  ( <small className="">Admin</small> )</div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
