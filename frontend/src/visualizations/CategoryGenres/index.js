/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';
import StarsRating from '../../components/StarsRating';
import Bar from '../Bar';

/* Antd */
import { Tree, Row, Col, Typography } from 'antd';
const { Title } = Typography;
const { TreeNode } = Tree;


const CategoryGenres = ({ data }) => {
    const [expandedKey, setExpandedKey] = useState('BUSINESS');
    const [selected, setSelected] = useState({ type: 'category', id: 'BUSINESS', label: 'Business' });
    const [ratingAverage, setRatingAverage] = useState({ average: 0, total: 0 });
    const [ratingData, setRatingData] = useState([]);
    const keys = Object.keys(data);
    const TreeNodes = [];
    for (let i in keys) {
        const category = data[keys[i]];
        const genres = category.genres.map(genre => <TreeNode title={genre.label} key={genre.id} isLeaf />);
        TreeNodes.push(
            <TreeNode title={category.label} key={category.id}>
                {genres}
            </TreeNode>
        );
    }
    const onSelect = (selectedKeys, e) => {
        const type = e.node.props.isLeaf ? 'genre' : 'category';
        const id = e.node.props.eventKey;
        const label = e.node.props.title;
        setSelected({ type, id, label });
    }
    useEffect(() => {
        api.get(`playstore/average/ratings?filter=${selected.type}&${selected.type}=${selected.id}`, setRatingAverage);
        api.get(`playstore/distribution/ratings?range=[1,5]&width=1&filter=${selected.type}&${selected.type}=${selected.id}`, setRatingData);
    }, [selected]);
    return (
        <React.Fragment>
            <Col span={6}>
                <div style={{ height: '500px', overflowY: 'scroll'}}>
                    <Tree defaultSelectedKeys={['BUSINESS']}
                        expandedKeys={[expandedKey]} onExpand={(e) => setExpandedKey(e[1])} {...{onSelect}}>
                        { TreeNodes }
                    </Tree>
                </div>
            </Col>
            <Col span={18} style={{ paddingLeft: '30px' }}>
                <Title level={3}>{ selected.label }</Title>
                <StarsRating value={ratingAverage.average.toFixed(2)} />
                <p>{ ratingAverage.total } evaluated apps</p>
                <Bar data={ratingData} axis='ratings (star)' />
            </Col>
        </React.Fragment>
    );
}

export default CategoryGenres;