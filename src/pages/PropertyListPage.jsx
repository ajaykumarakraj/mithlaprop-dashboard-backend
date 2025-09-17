import React from 'react';
import { useNavigate } from 'react-router-dom';

const properties = [
    { id: 1, name: 'Ocean View Villa', location: 'Malibu, CA', price: '$2,000,000' },
    { id: 2, name: 'Mountain Cabin', location: 'Aspen, CO', price: '$1,200,000' },
    { id: 3, name: 'City Apartment', location: 'New York, NY', price: '$850,000' },
];

const PropertyListPage = () => {
    const navigate = useNavigate();

    // Define dropdown actions
    const actions = [
        {
            label: 'View',
            icon: '👁️',
            onClick: (row) => navigate(`/detailpage/${row.id}`),
        },
        {
            label: 'Edit',
            icon: '✏️',
            onClick: (row) => alert(`Edit ${row.name}`),
        },
    ];


    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Property Listings</h2>
            <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Property Name</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, index) => (
                        <tr key={property.id}>
                            <td>{index + 1}</td>
                            <td>{property.name}</td>
                            <td>{property.location}</td>
                            <td>{property.price}</td>
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
                                    <ul className="dropdown-menu shadow-sm border-0">
                                        {actions.map((action, actionIndex) => (
                                            <li key={actionIndex}>
                                                <button
                                                    style={{ fontSize: '12px' }}
                                                    className="dropdown-item d-flex align-items-center gap-1 py-1"
                                                    onClick={() => action.onClick(property)}
                                                >
                                                    {action.icon}
                                                    {action.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PropertyListPage;
