/* Modules */
import React, { useEffect } from 'react';
import Wrapper from '../Wrapper';
import Pie from '../../visualizations/Pie';
import Bar from '../../visualizations/Bar';
import InstallsByCategory from '../../visualizations/Bar/InstallsByCategory';
import Visualisation from '../../components/Visualisation';
import { Link } from 'react-router-dom';

/* Antd */
import { Typography, Tag, Card, Statistic, Row, Icon } from 'antd';
const { Title, Text, Paragraph } = Typography;


/**
 * Categories
 */
const Categories = () => {
    return(
        <Wrapper>
            <Typography>
                <Tag>#category</Tag>
                <Tag>#genre</Tag>
                <Title level={2}>Categories</Title>
            </Typography>
        <Visualisation
            title='Number of installations per category'
            icon='list'
            height='800px'
            url='playstore/sum/installs?by=category&ordered=true'
            visualisation={InstallsByCategory}
            description={<Typography><Paragraph>In the <Link to='/general-stats'>General Statistics </Link>  
                we computed the most common categories, <Text strong>Family, Game, Tools, Medical, Business</Text> and  
                <Text strong> Productivity</Text>, as in these were the categories with the most amount of applications.
                This however doesn't imply popularity. To learn about the most popular categories, we must focus
                on another, perhaps more representative metric: installations. The number of installations of an application
                represent how many times users downloaded and installed it.</Paragraph></Typography>}
            discussion={<Typography><Paragraph>This graph shows that not all the categories previously labeled
                as common can be labeled popular. <Text strong>Game, Productivity, Family</Text> and <Text strong>
                Tools</Text> are in the top 5, while categories <Text strong>Medical</Text> and <Text strong>Business </Text>
                are far behind. Another interesting discovery of the categories <Text strong>Communication </Text>
                and <Text strong>Social</Text> that appear in the top 3, just after <Text strong>Games</Text>.
                This can probably be explained by the very famous social networks widely used across the world.</Paragraph></Typography>}
        />
        </Wrapper>
    );
};

export default Categories;