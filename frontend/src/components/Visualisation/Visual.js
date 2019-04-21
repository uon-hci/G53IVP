/* Modules */
import React from 'react';
import styled from 'styled-components';

/* Antd */
import { Typography, Col, Row } from 'antd';
const { Paragraph } = Typography;

const MyCol = styled(Col)`
    height: ${props => props.height};
    width: 50%;
`;

const MyRow = styled(Row)`
    height: ${props => props.height};
`;


const SideToSide = ( { visualisation, orientation, description, height }) => {
    const graph = <MyCol height={height} span={16}>{ visualisation }</MyCol>
    const Before = orientation == 'left' ? graph : null;
    const After = orientation == 'right' ? graph : null;
    return (
        <Row type="flex" justify="space-around" align="middle">
            { Before }
            <Col span={8}>
                <Paragraph>{ description }</Paragraph>
            </Col>
            { After }
        </Row>
    );
}

const OverUnder = ({ visualisation, description, discussion, height }) => {
    return (
        <React.Fragment>
            <Row>
                <Paragraph>{ description } </Paragraph>
            </Row>
            <MyRow {...{height}}>
                { visualisation }
            </MyRow>
            <Row>
                <Paragraph>{ discussion } </Paragraph>
            </Row>
        </React.Fragment>
    );
}

const Visual = (props) => {
    const { data, side, axis, height, visualisation, orientation, description, discussion } = props;
    let Graph = visualisation;
    Graph = <Graph data={data} axis={axis} />;
    if (side) {
        return <SideToSide visualisation={Graph} {...{orientation}} {...{description}} {...{height}} />;
    } else {
        return <OverUnder visualisation={Graph} {...{description}} {...{discussion}} {...{height}} />;
    }
};

export default Visual;