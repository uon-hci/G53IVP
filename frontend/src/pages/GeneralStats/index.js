/* Modules */
import React from 'react';
import Pie from '../../visualizations/Pie';
import Bar from '../../visualizations/Bar';
import Visualisation from '../../components/Visualisation';

/* Antd */
import { Typography, Tag, Card, Statistic, Row } from 'antd';
const { Title, Text } = Typography;


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
            <Card title='The Big Numbers' style={{ marginBottom: '16px' }}>
                <Row type='flex' justify='space-around'>
                    <Statistic title="Active Apps" value={2900000} />
                    <Statistic title="Active Android Users" value={2000000000} />
                    <Statistic title="Android's market share" value='85%' />
                    <Statistic title="Different Android devices " value={4000} />
                </Row>
            </Card>
            <Visualisation
                title='Categories'
                height='600px'
                orientation='left'
                url='playstore/distribution/categories'
                visualisation={Pie}
                description={<Text>The Playstore contains a total of 33 different categories. This pie chart shows that the most common
                ones are <Text strong>Family, Game, Tools, Medical, Business</Text> and <Text strong>Productivity</Text>.
                With over a thousand applications for the categories <Text strong>Family</Text> and <Text strong>Game</Text>,
                entertainement on the Playstore appears as the main source of activity.</Text>}
            />
            <Visualisation
                title='Pricing'
                height='600px'
                orientation='right'
                url='playstore/distribution/types'
                visualisation={Pie}
                description={<Text>This clear pie chart shows the obvious dominance of free applications on the Playstore. However,
                    a relevant part of these free applications actually conceal their true cost by presenting an <Text strong>in-app </Text> 
                     purchases feature. More investigation with additional data sets is required to know more about this feature.
                </Text>}
            />
            <Visualisation
                title='Ratings'
                height='600px'
                orientation='left'
                url='playstore/distribution/ratings'
                visualisation={Bar}
                description={<Text>The Playstore contains a total of 33 different categories. This pie chart shows that the most common
                ones are <Text strong>Family, Game, Tools, Medical, Business</Text> and <Text strong>Productivity</Text>.
                With over a thousand applications for the categories <Text strong>Family</Text> and <Text strong>Game</Text>,
                entertainement on the Playstore appears as the main source of activity.</Text>}
            />
        </React.Fragment>
    );
};

export default GeneralStats;