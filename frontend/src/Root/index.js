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
        <div style={styles.container}>
            <Router>
                <Layout>
                    <Header>
                    <div style={styles.title}>PlayStore</div>
                    </Header>
                    <Layout>
                    <Sider width={200}>
                        <Navigation />
                    </Sider>
                    <Layout style={styles.contentLayout}>
                        <Content style={styles.content}>
                            <Routes />
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </Router>
        </div>
    );
};

export default Root;