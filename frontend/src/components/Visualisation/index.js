/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';
import Visual from './Visual';
import Data from './Data';
import Title from './Title';

/* Antd */
import { Card, Button, Icon } from 'antd';

const Visualisation = (props) => {
    const { title, icon, ...other } = props;
    const [sourceMode, setSourceMode] = useState(false);
    const [url, setUrl] = useState(props.url);
    const [data, setData] = useState([]);
    const modeIcon = sourceMode ? 'pie-chart' : 'database';
    const modeText = sourceMode ? 'Visualisation' : 'Data';
    const onModeClick = () => setSourceMode(!sourceMode);
    const Content = sourceMode ? <Data data={data} height={props.height} /> : <Visual {...other} {...{data}} {...{setUrl}} />;
    useEffect(() => {
        api.get(url, setData);
    }, [url]);
    return (
        <Card style={{ marginBottom: '16px' }} 
            title={<Title text={title} icon={icon} />} 
            extra={<Button onClick={onModeClick}><Icon type={modeIcon} />{ modeText }</Button>}>
            { Content }
        </Card>
    );
};

export default Visualisation;