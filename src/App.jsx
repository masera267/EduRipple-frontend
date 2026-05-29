import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import ProtectedRoute from './components/ProtectedRoute';

// Import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SchemeOfWork from './pages/SchemeOfWork';
import LessonPlans from './pages/LessonPlans';
import RecordOfWork from './pages/RecordOfWork';
import AIChat from './pages/AIChat';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                {/* Public Routes */}
                <Route path="/login" component={Login} />
                
                {/* Protected Routes */}
                <ProtectedRoute path="/" exact component={Dashboard} />
                <ProtectedRoute path="/scheme-of-work" component={SchemeOfWork} />
                <ProtectedRoute path="/lesson-plans" component={LessonPlans} />
                <ProtectedRoute path="/record-of-work" component={RecordOfWork} />
                <ProtectedRoute path="/ai-chat" component={AIChat} />
                <ProtectedRoute path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;