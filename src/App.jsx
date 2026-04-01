import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components/pages here
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
                <Route path="/" exact component={Dashboard} />
                <Route path="/scheme-of-work" component={SchemeOfWork} />
                <Route path="/lesson-plans" component={LessonPlans} />
                <Route path="/record-of-work" component={RecordOfWork} />
                <Route path="/ai-chat" component={AIChat} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;