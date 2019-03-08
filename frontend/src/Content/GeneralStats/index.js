/* Modules */
import React from 'react';

/* Antd */
import { Typography, Tag } from 'antd';
const { Title } = Typography;

/**
 * General stats
 */
const GeneralStats = () => {
    return(
        <Typography>
            <Tag>#applications</Tag>
            <Tag>#users</Tag>
            <Tag>#games</Tag>
            <Title level={2}>General statistics</Title>
        </Typography>
    );
};

export default GeneralStats;