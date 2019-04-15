/* Modules */
import React from 'react';
import Pie from '../../visualizations/Pie';
import styles from './styles';
import Visualisation from '../../components/Visualisation';

/* Antd */
import { Typography, Tag, Card, Statistic, Col, Row } from 'antd';
const { Title, Paragraph } = Typography;


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
            <Visualisation
                height='600px'
                orientation='left'
                visualisation={<Pie url='http://localhost:3339/data/playstore/distribution/categories' />}
                description='The Playstore contains a total of 33 different categories. This pie chart shows that the most common
                ones are Family, Game, Tools, Medical, Business and Productivity.'
            />
        </React.Fragment>
    );
};

export default GeneralStats;