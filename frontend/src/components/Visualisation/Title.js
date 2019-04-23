/* Modules */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Antd */
import { Icon } from 'antd';

const Text = styled.span`
    margin-left: 10px;
`;

const Title = ({ icon, text, loading }) => {
    const TitleIcon = () => loading ? <Icon type='loading' /> 
        : <FontAwesomeIcon style={{ color: 'rgba(0, 0, 0, 0.2)' }} icon={icon} />
    return (
        <React.Fragment>
            <TitleIcon />
            <Text>{ text }</Text>
        </React.Fragment>
    );
};

export default Title;