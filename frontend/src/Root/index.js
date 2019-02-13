/* Modules */
import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';

/* Styled container */
const Container = styled.div`
    font-family: 'Roboto';
`;

/**
 * Root component
 */
const Root = () => {
    return (
        <Container>
            <NavigationBar />
        </Container>
    );
};

export default Root;