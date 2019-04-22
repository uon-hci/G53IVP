/* Modules */
import React from 'react';
import Wrapper from '../Wrapper';
import Pie from '../../visualizations/Pie';
import Bar from '../../visualizations/Bar';
import Visualisation from '../../components/Visualisation';
import { Link } from 'react-router-dom';

/* Antd */
import { Typography, Tag, Card, Statistic, Row, Icon } from 'antd';
const { Title, Text } = Typography;


/**
 * General stats
 */
const GeneralStats = () => {
    return(
        <Wrapper>
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
                icon='list'
                side
                height='600px'
                orientation='left'
                url='playstore/distribution/categories?skip=300'
                visualisation={Pie}
                description={<Text>Applications are categorised based on their content. These categories help users identify
                    the type of application they wish to obtain. The Playstore contains a total of 33 different categories. 
                    This pie chart shows that the most common ones are <Text strong>Family, Game, Tools, Medical, Business</Text> and  
                    <Text strong> Productivity</Text>. The Family category contains many subcategories, notably a lot of
                    family games and activities, which with Games being the second most common category, confirms that the major
                    use for applications on the Playstore is entertainment. More can be learned about the categories in section
                    <Link to='/categories'> Categories <Icon type='link' /></Link>.</Text>}
            />
            <Visualisation
                title='Ratings'
                axis='rating ranges (stars)'
                icon='star'
                side
                height='600px'
                orientation='right'
                url='playstore/distribution/ratings?range=[1,5]&width=1'
                visualisation={Bar}
                description={<Text>Applications on the Playstore are rated from 1 <Icon type='star' /> to 5 <Icon type='star' />, with 5 being the best rating.
                    Each application is thefore given an average between 1.0 and 5.0 to represent its quality. This bar graph
                    shows that a vast majority of the applications are rated between 4.0 and 5.0. Of course, ratings
                    are often posted along with a short text from the user justifying the given number of stars. These texts, along with
                    the ratings, are addressed in more depth in section <a href='/ratings'>Ratings <Icon type='link' /></a>.</Text>}
            />
            <Visualisation
                title='Pricing'
                icon='dollar-sign'
                height='600px'
                side
                orientation='left'
                url='playstore/distribution/types'
                visualisation={Pie}
                description={<Text>Applications on the Playstore can either be <Text strong>Free</Text> or <Text strong>Paid</Text>.
                    This important distinction is what may help user differ quality of application, and also designers
                    that must make a choice between integrating advertisement or making the app more expensive. This pie chart shows the obvious 
                    dominance of free applications on the Playstore. However,
                    a relevant part of these free applications actually conceal their true cost by presenting an <Text strong>in-app </Text> 
                     purchases feature. To learn more about how applications are priced and how it relates to other concepts, head to section
                     <a href='/pricings'> Pricing <Icon type='link' /></a>.
                </Text>}
            />
            <Visualisation
                title='Sizes'
                axis='size ranges (MB)'
                icon='file-download'
                height='600px'
                side
                orientation='right'
                url='playstore/distribution/sizes?range=[0,100]&width=10'
                visualisation={Bar}
                description={<Text>To run on a device, a Playstore application must first be installed. The sizes of
                    application is an important metric to consider when building one, considering the impact in memory,
                    disk and performance. This bar graph shows that most applications have a size inferior to 30MB. In the section 
                    <a href='/sizes'> Sizes <Icon type='link' /></a>,
                    we will see in more depth exactly how sizes are correlated to other characteristics of an application.
                </Text>}
            />
            <Visualisation
                title='Content Rating'
                icon='lock'
                height='600px'
                side
                orientation='left'
                url='playstore/distribution/content_ratings?skip=10'
                visualisation={Pie}
                description={<Text>Content rating is the category to which an application belongs in terms of audience.
                    There are five main categories of content rating:
                    <ul>
                        <li><Text strong>Everyone</Text>: suitable for all ages,</li>
                        <li><Text strong>Everyone 10+</Text>: suitable for ages 10 and up,</li>
                        <li><Text strong>Teen</Text>: suitable for ages 13 and up,</li>
                        <li><Text strong>Mature</Text>: suitable for ages 17 and up,</li>
                        <li><Text strong>Adults Only</Text>: suitable only for adults ages 18 and up.</li>
                    </ul>
                    This pie chart shows the repartition of these content ratings. In section <a href='/content_ratings'> Content Ratings <Icon type='link' /></a>,
                    knowing what types of applications belong to which categories will help us understand
                    the relations between content and restrictions when building a new application.
                </Text>}
            />
        </Wrapper>
    );
};

export default GeneralStats;