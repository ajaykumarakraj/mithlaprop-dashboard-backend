import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertySubType = () => {
    const navigate = useNavigate();

    const [properties, setProperties] = useState([
        { id: 1, name: "Plot", },
        { id: 2, name: "Flate" },

    ]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            setProperties(properties.filter((prop) => prop.id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Manage Properties</h3>
                <button className="btn btn-primary" onClick={() => alert("Add New Property clicked")}>
                    ➕ Add Property
                </button>
            </div>

            <div className="">
                <table className="table  table-hover align-middle text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th> Name</th>

                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.length === 0 ? (
                            <tr>
                                <td colSpan="3">No properties available.</td>
                            </tr>
                        ) : (
                            properties.map((property, index) => (
                                <tr key={property.id}>
                                    <td>{index + 1}</td>
                                    <td>{property.name}</td>
                                    <td>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Actions
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0">
                                                <li>
                                                    <button
                                                        className="dropdown-item d-flex align-items-center gap-1"
                                                        onClick={() => alert(`Edit ${property.name}`)}
                                                    >
                                                        ✏️ <span>Edit</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item d-flex align-items-center gap-1"
                                                        onClick={() => navigate(`/property/${property.id}`)}
                                                    >
                                                        ✅ <span>Active</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item d-flex align-items-center gap-1 text-danger"
                                                        onClick={() => handleDelete(property.id)}
                                                    >
                                                        ❌ <span>In Active</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PropertySubType;
