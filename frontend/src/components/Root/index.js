/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from '../Navigation';
import Routes from '../Routes';
import styles from './styles';

/* Antd */
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

/**
 * Root component
 */
const Root = () => {
    return (
        <Router>
            <Layout style={{ height: '100vh' }}>
                <Header>
                    <div style={styles.title}>PlayStore</div>
                </Header>
                <Layout>
                    <Sider width={200}>
                        <Navigation />
                    </Sider>
                    <Routes />
                </Layout>
            </Layout>
        </Router>
    );
};

export default Root;