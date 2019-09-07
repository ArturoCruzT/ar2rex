import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ROUTES from './routes';

function App() {
    return (
        <Router basename={'/art2rex'}>
            {ROUTES.map((route, i) => (
                <Route key={route.path}
                       path={route.path}
                       exact={route.exact || false}
                       component={route.component}
                />
            ))}
        </Router>
    );
}

export default App;
