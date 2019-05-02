/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';
import Visual from './Visual';
import Data from './Data';
import Title from './Title';

/* Antd */
import { Card, Button, Icon, Tooltip } from 'antd';

const Visualisation = props => {
	const { title, icon, ...other } = props;
	const [sourceMode, setSourceMode] = useState(false);
	const [url, setUrl] = useState(props.url);
	const [data, setData] = useState([]);
	const modeIcon = sourceMode ? 'pie-chart' : 'database';
	const modeText = sourceMode ? 'Visualisation' : 'Data';
	const onModeClick = () => setSourceMode(!sourceMode);
	const tooltip = sourceMode ? 'See visualisation' : 'See query data';
	const Content = sourceMode ? (
		<Data data={data} height={props.height} />
	) : (
		<Visual {...other} {...{ data }} {...{ setUrl }} />
	);
	useEffect(() => {
		api.get(url, setData);
	}, [url]);
	return (
		<Card
			loading={data.length == 0}
			style={{ marginBottom: '16px' }}
			title={<Title loading={data.length == 0} text={title} icon={icon} />}
			extra={
				<Tooltip placement="topRight" title={tooltip}>
					<Button onClick={onModeClick}>
						<Icon type={modeIcon} />
					</Button>
				</Tooltip>
			}
		>
			{Content}
		</Card>
	);
};

export default Visualisation;
