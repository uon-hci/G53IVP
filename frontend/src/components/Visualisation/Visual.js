/* Modules */
import React from 'react';
import styled from 'styled-components';

/* Antd */
import { Typography, Card, Col, Row } from 'antd';
const { Paragraph } = Typography;

const MyCol = styled(Col)`
    height: ${props => props.height};
    width: 50%;
`;

const Visual = ({ visualisation, description, orientation, height, data }) => {
    const Graph = visualisation;
    const Before = orientation == 'left' ? <MyCol height={height} span={16}><Graph data={data} /></MyCol> : null;
    const After = orientation == 'right' ? <MyCol height={height} span={16}><Graph data={data} /></MyCol> : null;
    return (
        <Row type="flex" justify="space-around" align="middle">
            { Before }
            <Col span={8}>
                <Typography>
                    <Paragraph>{ description }</Paragraph>
                </Typography>
            </Col>
            { After }
        </Row>
    );
};

export default Visual;