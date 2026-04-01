import React, { useState } from 'react';

const LessonPlans = () => {
    const [lessonPlans, setLessonPlans] = useState([]);

    const createLessonPlan = () => {
        const newPlan = {
            id: Date.now(),
            title: 'New Lesson Plan',
            subject: 'Mathematics',
            grade: 'Grade 7',
            duration: '45 minutes',
            objectives: 'Students will learn...',
            createdDate: new Date().toLocaleDateString()
        };
        setLessonPlans([...lessonPlans, newPlan]);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Lesson Plans</h1>
                <button onClick={createLessonPlan} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    + Create Lesson Plan
                </button>
            </div>
            {lessonPlans.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No lesson plans created yet. Start by creating a new plan!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {lessonPlans.map(plan => (
                        <div key={plan.id} className="border rounded-lg p-4 hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg text-gray-800">{plan.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">Subject: {plan.subject}</p>
                            <p className="text-sm text-gray-600">Grade: {plan.grade}</p>
                            <p className="text-sm text-gray-600">Duration: {plan.duration}</p>
                            <p className="text-xs text-gray-500 mt-3">Created: {plan.createdDate}</p>
                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 bg-blue-500 text-white py-1 rounded text-sm hover:bg-blue-600">Edit</button>
                                <button className="flex-1 bg-red-500 text-white py-1 rounded text-sm hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LessonPlans;