/* Modules */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import routes from '../routes';

/* Navigation bar */
const Navigation = ({ location }) => {
    return(
        <Menu mode="inline" defaultSelectedKeys={[location.pathname]} style={{ height: '100%', borderRight: 0 }}>
            { routes.map(route => (
                <Menu.Item key={route.path}>                    
                    <Link to={route.path}><Icon type={route.icon} /> {route.name}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default withRouter(Navigation);