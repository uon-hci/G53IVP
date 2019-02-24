/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';
import Menu from '../Menu';
import routes from '../routes';

/* Styled container */
const Container = styled.div`
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    height: 100%;
`;

/* Styled page */
const Content = styled.div`
    display: flex;
    width: 100%;
    flex-grow: 12;
`;

/* Styled content */
const Page = styled.div`
    padding: 20px;
    padding-left: 50px;
    padding-top: 30px;
    flex-grow: 1;
    background-color: ${props => props.theme.page};
    border-top-left-radius: 30px;
    color: ${props => props.theme.content};
`;

/**
 * Map Route component
 * 
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
 * Root component
 */
const Root = () => {
    return (
        <Container>
            <NavigationBar />
            <Router>
                <Content>
                    <Menu />
                    <Page>
                        { routes.map(route => mapRoute(route)) }
                    </Page>
                </Content>
            </Router>
        </Container>
    );
};

export default Root;