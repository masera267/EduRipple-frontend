import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <div className="stats">
                <div className="stat-card">
                    <h2>Schemes of Work</h2>
                    <p>0</p>
                </div>
                <div className="stat-card">
                    <h2>Lesson Plans</h2>
                    <p>0</p>
                </div>
                <div className="stat-card">
                    <h2>Records</h2>
                    <p>0</p>
                </div>
            </div>
            <section className="quick-start">
                <h2>Quick Start</h2>
                <ul>
                    <li>Get started with Schemes of Work</li>
                    <li>Create your first Lesson Plan</li>
                    <li>Upload Records to the system</li>
                    <li>Explore our resources</li>
                </ul>
            </section>
            <section className="ai-features">
                <h2>AI Features</h2>
                <ul>
                    <li>Automated lesson suggestions</li>
                    <li>Real-time feedback on plans</li>
                    <li>Data analysis for improved learning</li>
                    <li>Personalized recommendations for schemes</li>
                </ul>
            </section>
            <footer>
                <h2>Tip</h2>
                <p>Utilize the AI features to enhance your teaching experience!</p>
            </footer>
        </div>
    );
};

export default Dashboard;