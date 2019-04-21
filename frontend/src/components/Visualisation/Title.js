/* Modules */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Text = styled.span`
    margin-left: 10px;
`;

const Title = ({ icon, text }) => {
    return (
        <React.Fragment>
            <FontAwesomeIcon style={{ color: 'rgba(0, 0, 0, 0.2)' }} icon={icon} />
            <Text>{ text }</Text>
        </React.Fragment>
    );
};

export default Title;