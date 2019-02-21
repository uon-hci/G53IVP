/* Modules */
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

/* Global style */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto|Staatliches');
    body {
        background-color: ${theme.background};
        margin: 0;
    }
`;

/**
 * App
 */
const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Root />
            </ThemeProvider>
        </React.Fragment>
    );
};

/* Render */
render(<App />, document.getElementById('app'));
