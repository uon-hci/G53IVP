/* Modules */
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(far, fas);

/* Global style */
const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Raleway:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
    @import url(https://fonts.googleapis.com/css?family=Righteous:regular);
    @import url(https://fonts.googleapis.com/css?family=Staatliches:regular);
    body {
        background-color: ${theme.primary};
        margin: 0;
        overflow: hidden;
    }
    .ant-typography {
        font-size: 16px;
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
