import React from 'react';
import { useHistory } from 'react-router-dom';

const Settings = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Redirect to login
    history.push('/login');
  };

  return (
    <div>
      <h1>Settings</h1>
      <section className="settings-section">
        <h2>Account Settings</h2>
        <button onClick={handleLogout} className="btn-logout">
          Sign Out
        </button>
      </section>
    </div>
  );
};

export default Settings;