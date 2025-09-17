import React from 'react';
import ReusableTable from './Table';
import { useNavigate } from 'react-router-dom';

const TableData = () => {
    const navigate = useNavigate()
    const users = [
        { id: 1, name: 'John Doe', number: '986985698', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', number: '986985698', email: 'jane@example.com' },
        { id: 3, name: 'Bob Brown', number: '986985698', email: 'bob@example.com' },
        { id: 3, name: 'Bob Brown', number: '986985698', email: 'bob@example.com' },
        { id: 3, name: 'Bob Brown', number: '986985698', email: 'bob@example.com' },
        { id: 3, name: 'Bob Brown', number: '986985698', email: 'bob@example.com' },

    ];

    const columns = [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Number', key: 'number' },
    ];
    const actions = [
        { label: 'Profile', icon: '👤', onClick: (row) => navigate(`/profile`) },
        { label: 'Properties', icon: '🏢', onClick: (row) => navigate(`/propertylist/${row.id}`) },
        { label: 'Approved', icon: '✅', className: 'text-success', onClick: (row) => alert(`Approved ${row.name}`) },
        { label: 'Canceled', icon: '❌', className: 'text-danger', onClick: (row) => alert(`Cancelled ${row.name}`) },
    ];


    return (
        <div>
            <h2 className="text-center mt-4">Table</h2>
            <ReusableTable data={users} columns={columns} actions={actions} />
        </div>
    );
};

export default TableData;
