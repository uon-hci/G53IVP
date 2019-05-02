/* Modules */
import React from 'react';
import styles from './styles';

/* Antd */
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Content } = Layout;

/**
 * Wrapper component
 */
const Wrapper = ({ children }) => {
	return (
		<Layout style={styles.contentLayout}>
			<Content style={styles.content}>{children}</Content>
		</Layout>
	);
};

export default Wrapper;
