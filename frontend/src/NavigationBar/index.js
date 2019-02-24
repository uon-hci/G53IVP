/* Modules */
import React from 'react';
import styled from 'styled-components';

/* Bar */
const Bar = styled.div`
    width: 100%;
    min-height: 80px;
    flex-grow: 1;
    background-color: ${props => props.theme.primary};
    color: white;
    display: flex;
    align-items: center;
`;

/* App title */
const AppTitle = styled.div`
    color: ${props => props.theme.appTitle};
    margin-left: 30px;
    margin-right: 20px;
    font-family: 'Staatliches';
    font-size: 28px;
    cursor: pointer;
`;

/* Right end */
const RightEnd = styled.div`
    margin-left: auto;
    margin-right: 30px;
    order: 2;
    font-family: 'Roboto';
    font-weight: bold;
    color: #F2F2F2;
    opacity: 0.2;
`;

/**
 * Scroll to top
 */
const toTop = () => {
    window.scrollTo(0, 0);
}

/* Navigation bar */
const NavigationBar = () => {
    return(
        <Bar>
            <AppTitle onClick={toTop}>Google Play Store</AppTitle>
            <RightEnd>2019 © andyNroses</RightEnd>
        </Bar>
    );
};

export default NavigationBar;