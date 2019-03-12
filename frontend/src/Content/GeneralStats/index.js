/* Modules */
import React from 'react';
import Pie from '../../Pie';
import styles from './styles';

/* Antd */
import { Typography, Tag, Card, Button, Statistic, Col, Row } from 'antd';
const { Title } = Typography;

/**
 * General stats
 */
const GeneralStats = () => {
    return(
        <React.Fragment>
            <Typography>
                <Tag>#applications</Tag>
                <Tag>#users</Tag>
                <Tag>#games</Tag>
                <Title level={2}>General statistics</Title>
            </Typography>
            <Card title='The Big Numbers' style={styles.card}>
                <Row type='flex' justify='space-around'>
                    <Statistic title="Active Apps" value={2900000} />
                    <Statistic title="Active Android Users" value={2000000000} />
                    <Statistic title="Android's market share" value='85%' />
                    <Statistic title="Different Android devices " value={4000} />
                </Row>
            </Card>
        </React.Fragment>
    );
};

export default GeneralStats;