import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Table = ({ data = [], columns = [], actions = [] }) => {
    return (
        <div className="container mt-2">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    {columns.map((col) => (
                                        <th scope="col" key={col.key}>{col.label}</th>
                                    ))}
                                    {actions.length > 0 && <th scope="col">Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={columns.length + 2} className="text-center text-muted py-4">
                                            No records found.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((row, index) => (
                                        <tr key={row.id || index}>
                                            <td>{index + 1}</td>
                                            {columns.map((col) => (
                                                <td key={col.key}>{row[col.key]}</td>
                                            ))}
                                            {actions.length > 0 && (
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                                            type="button"
                                                            id={`dropdownMenuButton${index}`}
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            Actions
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu shadow-sm border-0"
                                                            aria-labelledby={`dropdownMenuButton${index}`}
                                                        >
                                                            {actions.map((action, actionIndex) => (
                                                                <li key={actionIndex}>
                                                                    <button
                                                                        className={`dropdown-item d-flex align-items-center gap-1 py-1 ${action.className || ""}`}
                                                                        onClick={() => action.onClick(row)}
                                                                        style={{ fontSize: "12px" }}
                                                                    >

                                                                        {action.icon && <span className="text-muted">{action.icon}</span>}
                                                                        <span>{action.label}</span>
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
