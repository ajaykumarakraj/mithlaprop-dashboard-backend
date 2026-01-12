// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import PropertyList from "./pages/PropertyListPage";
// import Table from "./pages/Table/Table";
import TableData from "./pages/Table/TableData";
import PropertyListPage from "./pages/PropertyListPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import PropertyType from "./pages/PropertyType";
import PropertySubType from "./pages/PropertySubType";
import AmenitiesType from "./pages/AmenitiesType";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/agent" element={<TableData />} />
        <Route path="/propertylist/:id" element={<PropertyListPage />} />
        <Route path="/detailpage/:id" element={<PropertyDetailPage />} />
        <Route path="/amenities-type" element={<AmenitiesType />} />
        <Route path="/property-type" element={<PropertyType />} />
        <Route path="/property-sub-type" element={<PropertySubType />} />
      </Route>
    </Routes>
  );
};

export default App;
