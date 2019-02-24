/* Modules */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../routes';

/* Style left panel */
const LeftPanel = styled.div`
    width: 250px;
    background-color: ${props => props.theme.menu};
    border-right: 10px solid ${props => props.theme.primary};
    border-top-right-radius: 30px;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
`;

const MenuItem = styled.div`
    font-size: 12px;
    height: 50px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    a {
        text-decoration: none;
        color: ${props => props.active ? props.theme.primary : props.theme.menuItem};
    }
`;

/**
 * Menu
 * @param {object} location
 */
const Menu = ({ location }) => {
    return(
        <LeftPanel>
            { routes.map(route => (
                <MenuItem key={route.name} active={location.pathname == route.path}>
                    <Link to={route.path}>{route.name}</Link>
                </MenuItem>
            ))}
        </LeftPanel>      
    );
};

export default withRouter(Menu);