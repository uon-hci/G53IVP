/* Modules */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../routes';

/* Navigation bar */
const Navigation = () => {
    return(
        <Menu mode="inline" defaultSelectedKeys={['Introduction']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
            { routes.map(route => (
                <Menu.Item key={route.name}>                    
                    <Link to={route.path}><Icon type={route.icon} /> {route.name}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default Navigation;