/* Modules */
import React from 'react';

/* Antd */
import { Typography, Tag } from 'antd';
const { Title, Paragraph, Text } = Typography;

/**
 * Introduction
 */
const Introduction = () => {
    return(
        <Typography>
            <Tag>#playstore</Tag>
            <Tag>#visualization</Tag>
            <Tag>#business</Tag>
            <Title level={2}>Introduction</Title>
            <Paragraph>
            The Android application store, <a href='https://play.google.com/store'>Google Play Store</a>, 
            has become an invaluable platform for mobile technology with almost <Text strong>3 millions 
            applications</Text> currently available, with goals such as  entertainment, education, business, social, health and many others. 
            Not only is this platform an absolute necessity for every Android user (77.45% of worldwide smartphone users), 
            it is also the place where startups and companies can present their products to the public. It is therefore very important for any 
            organization wishing to use the Play Store for business purposes to fully understand its content and its current state. 
            Investigating such information through data analysis and visualization allows business entities to understand the users' desires, 
            needs and adapt their products to the correct market.
            </Paragraph>
        </Typography>
    );
};

export default Introduction;