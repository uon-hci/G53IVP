/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';
import Visual from './Visual';
import Data from './Data';
import styled from 'styled-components';

/* Antd */
import { Card, Button, Icon } from 'antd';

const Visualisation = (props) => {
    const { url, title, ...other } = props;
    const [sourceMode, setSourceMode] = useState(false);
    const [data, setData] = useState([]);
    const modeIcon = sourceMode ? 'pie-chart' : 'database';
    const modeText = sourceMode ? 'Visualisation' : 'Data';
    const onModeClick = () => setSourceMode(!sourceMode);
    const Content = sourceMode ? <Data data={data} height={props.height} /> : <Visual {...other} data={data} />;
    useEffect(() => {
        api.get(url, setData);
    }, []);
    return (
        <Card style={{ marginBottom: '16px' }} title={title} extra={<Button onClick={onModeClick}><Icon type={modeIcon} />{ modeText }</Button>}>
            { Content }
        </Card>
    );
};

export default Visualisation;