/* Modules */
import React from 'react';
import ReactJson from 'react-json-view'

const Data = ({ data, height }) => {
    return <ReactJson src={data} style={{ height, overflowY: 'scroll' }} />
};

export default Data;