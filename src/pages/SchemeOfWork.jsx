import React, { useState } from 'react';

const SchemeOfWork = () => {
    const [schemes, setSchemes] = useState([]);

    const addScheme = () => {
        const newScheme = {
            id: Date.now(),
            title: 'New Scheme of Work',
            grade: 'Grade 7',
            subject: 'Mathematics',
            status: 'Draft',
            createdDate: new Date().toLocaleDateString(),
        };
        setSchemes([...schemes, newScheme]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Scheme of Work</h1>
                <button onClick={addScheme} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> + New Scheme </button>
            </div>
            {schemes.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No schemes of work yet. Create one to get started!</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Title</th>
                                <th className="border p-3 text-left">Subject</th>
                                <th className="border p-3 text-left">Grade</th>
                                <th className="border p-3 text-left">Status</th>
                                <th className="border p-3 text-left">Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schemes.map(scheme => (
                                <tr key={scheme.id} className="hover:bg-gray-50">
                                    <td className="border p-3">{scheme.title}</td>
                                    <td className="border p-3">{scheme.subject}</td>
                                    <td className="border p-3">{scheme.grade}</td>
                                    <td className="border p-3">
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"> {scheme.status} </span>
                                    </td>
                                    <td className="border p-3">{scheme.createdDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SchemeOfWork;