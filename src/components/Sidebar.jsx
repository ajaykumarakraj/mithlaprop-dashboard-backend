// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: "/", icon: "📊", label: "Dashboard" },
    { to: "/profile", icon: "🧑‍💼", label: "Profile" },
    { to: "/agent", icon: "🤝", label: "Agent" },
    { to: "/amenities-type", icon: "🛎️", label: "Amenities" },
    { to: "/property-type", icon: "🏗️", label: "Property Type" },
    { to: "/property-sub-type", icon: "🏘️", label: "Property Sub Type" },
  ];


  return (
    <div
      className={`bg-dark text-white d-flex flex-column p-3 position-sticky top-0 ${collapsed ? "align-items-center" : ""}`}
      style={{
        width: collapsed ? "60px" : "220px",
        height: "100vh",
        overflowY: "auto",
        transition: "width 0.3s",
      }}
    >
      {/* Toggle Button */}
      <div className="d-flex align-items-center mb-4">
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "☰" : "×"}
        </button>
        {!collapsed && <h5 className="ms-2 mb-0">Menu</h5>}
      </div>

      {/* Menu Items */}
      <nav className="nav flex-column">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={index}
              to={item.to}
              className={`d-flex align-items-center mb-2 px-2 py-2 rounded text-decoration-none ${isActive ? "bg-add text-white" : "text-white"}`}
              style={{ transition: "background-color 0.2s", fontSize: "12px" }}
            >
              <span className="me-2">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
