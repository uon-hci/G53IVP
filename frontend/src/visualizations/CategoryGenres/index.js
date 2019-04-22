/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';
import StarsRating from '../../components/StarsRating';

/* Antd */
import { Tree, Row, Col, Typography } from 'antd';
const { Title } = Typography;
const { TreeNode } = Tree;


const CategoryGenres = ({ data }) => {
    const [expandedKey, setExpandedKey] = useState('ART_AND_DESIGN');
    const [selectedGenre, setSelectedGenre] = useState({ id: 'Art & Design;Creativity', label: 'Art and design: creativity' });
    const keys = Object.keys(data);
    const TreeNodes = [];
    for (let i in keys) {
        const category = data[keys[i]];
        const genres = category.genres.map(genre => <TreeNode title={genre.label} key={genre.id} isLeaf/>);
        TreeNodes.push(
            <TreeNode title={category.label} key={category.id} selectable={false}>
                {genres}
            </TreeNode>
        );
    }
    const onSelect = (selectedKeys, e) => {
        const genreId = e.node.props.eventKey;
        const genreLabel = e.node.props.title;
        setSelectedGenre({ id: genreId, label: genreLabel });
    }
    return (
        <React.Fragment>
            <Col span={5}>
                <div style={{ height: '480px', overflowY: 'scroll'}}>
                    <Tree defaultSelectedKeys={['Art & Design;Creativity']}
                        expandedKeys={[expandedKey]} onExpand={(e) => setExpandedKey(e[1])} {...{onSelect}}>
                        { TreeNodes }
                    </Tree>
                </div>
            </Col>
            <Col span={19} style={{ paddingLeft: '30px' }}>
                <Title level={3}>{ selectedGenre.label }</Title>
                <StarsRating value={3.6} />
            </Col>
        </React.Fragment>
    );
}

export default CategoryGenres;