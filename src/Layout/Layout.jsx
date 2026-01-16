// src/layout/Layout.js
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="d-flex flex-column bgadd">
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <main className="flex-grow-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
