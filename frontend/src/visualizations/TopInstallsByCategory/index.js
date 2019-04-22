/* Modules */
import React, { useState, useEffect } from 'react';
import api from '../../api';

/* Antd */
import { Table, Select } from 'antd';
const Option = Select.Option;

const TopInstallsByCategory = ({ data, setUrl }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        api.get('playstore/list/categories', setCategories);        
    }, []);
    const columns = [{
        title: 'Application name',
        dataIndex: 'label',
        key: 'appname'
    }, {
        title: 'Installations',
        dataIndex: 'value',
        key: 'installs',
        render: text => <React.Fragment>{ text }+</React.Fragment>
      },
    ];
    const updateUrl = (category) => {
        setUrl(`playstore/sum/installs?by=app&filter=category&category=${category}&ordered=desc&limit=10`);
    }
    return (
        <React.Fragment>
            <Select defaultValue='Social' style={{ width: 200, marginBottom: '20px' }} onChange={updateUrl}>
                { categories.map(category => <Option value={category.id} key={category.id}>{ category.label }</Option>)}
            </Select>
            <Table pagination={false} bordered dataSource={data} rowKey='id' {...{columns}} />
        </React.Fragment>
    );
}

export default TopInstallsByCategory;