/* Modules */
import React from 'react';
import routes from '../../routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Maps routes
 * @param {object} route 
 */
const mapRoute = (route) => {
    if (route.path == '/') {
        return <Route key={route.path} exact path='/' component={route.component} />
    } else {
        return <Route key={route.path} path={route.path} component={route.component} />
    }
};

/**
 * Mapped routes
 */
const Routes = () => routes.map(route => mapRoute(route));

export default Routes;