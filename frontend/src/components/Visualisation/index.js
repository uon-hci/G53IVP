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

const Visualisation = ({ visualisation, description, orientation, height }) => {
    const Before = orientation == 'left' ? <MyCol height={height} span={16}>{ visualisation }</MyCol> : null;
    const After = orientation == 'right' ? <MyCol height={height} span={16}>{ visualisation }</MyCol> : null;
    return (
        <Card title='Categories'>
            <Row type="flex" justify="space-around" align="middle">
                { Before }
                <Col span={8}>
                    <Typography>
                        <Paragraph>{ description }</Paragraph>
                    </Typography>
                </Col>
                { After }
            </Row>
        </Card>
    );
};

export default Visualisation;