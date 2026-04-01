import React, { useState } from 'react';
const RecordOfWork = () => {
    const [records, setRecords] = useState([]);

    const addRecord = () => {
        const newRecord = {
            id: Date.now(),
            lessonTopic: 'Quadratic Equations',
            date: new Date().toLocaleDateString(),
            class: 'Grade 7A',
            duration: '45 minutes',
            attendance: '28/30',
            completed: true,
            notes: 'Students understood the concept well.'
        };
        setRecords([...records, newRecord]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Record of Work</h1>
                <button onClick={addRecord} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    + Add Record
                </button>
            </div>
            {records.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No records yet. Start tracking your lessons!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {records.map(record => (
                        <div key={record.id} className="border rounded-lg p-4 bg-gray-50 hover:bg-white transition">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Topic</p>
                                    <p className="font-semibold text-gray-800">{record.lessonTopic}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Date</p>
                                    <p className="font-semibold text-gray-800">{record.date}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Class</p>
                                    <p className="font-semibold text-gray-800">{record.class}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">Attendance</p>
                                    <p className="font-semibold text-green-600">{record.attendance}</p>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-gray-600">{record.notes}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default RecordOfWork;