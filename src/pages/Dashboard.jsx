// src/pages/Dashboard.js
import React from "react";

const Dashboard = () => {
    const metrics = [
        {
            title: "Total Users",
            value: "1,254",
            icon: "👥",
            bgColor: "#f1f3f5",
            textColor: "#343a40",
        },
        {
            title: "Properties Listed",
            value: "320",
            icon: "🏘️",
            bgColor: "#e9f7ef",
            textColor: "#1e7e34",
        },
        {
            title: "Revenue",
            value: "$128,000",
            icon: "💰",
            bgColor: "#fff3cd",
            textColor: "#856404",
        },
        {
            title: "Pending Approvals",
            value: "12",
            icon: "⏳",
            bgColor: "#fdecea",
            textColor: "#721c24",
        },
    ];

    return (
        <div className="container mt-4">
            <h3 className="mb-4 fw-semibold">📊 CRM Dashboard Overview</h3>

            <div className="row">
                {metrics.map((metric, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ backgroundColor: metric.bgColor }}
                        >
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div
                                            className="fs-1"
                                            style={{ color: metric.textColor }}
                                        >
                                            {metric.icon}
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-1 text-muted">{metric.title}</h6>
                                        <h4 className="fw-bold" style={{ color: metric.textColor }}>
                                            {metric.value}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
