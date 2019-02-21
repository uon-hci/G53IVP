/* Modules */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../routes';

/* Style left panel */
const LeftPanel = styled.div`
    min-width: 200px;
    background-color: ${props => props.theme.menu};
    border-right: 10px solid ${props => props.theme.navigationBar};
    display: flex;
    flex-direction: column;
    padding-top: 25px;
`;

const MenuItem = styled.div`
    color: #999999;
    font-size: 12px;
    height: 50px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    a {
        text-decoration: none;
        color: #999999;
    }
`;

/**
 * Menu
 */
const Menu = () => {
    return(
        <LeftPanel>
            { routes.map(route => <MenuItem key={route.name}><Link to={route.path}>{route.name}</Link></MenuItem>) }
        </LeftPanel>      
    );
};

export default Menu;