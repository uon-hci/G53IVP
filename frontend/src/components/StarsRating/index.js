/* Modules */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Star = ({ half, full }) => {
    const color = '#fcd23c';
    const icon = full ? 'star' : half ? 'star-half-alt' : faStar;
    return <FontAwesomeIcon {...{icon}} {...{color}} style={{ fontSize: '20px' }}/>;
}

const Value = styled.span`
    font-weight: bold;
    color: #fcd23c;
    margin-left: 5px;
    font-size: 16px;
`;

const StarsRating = ({ value }) => {
    let stars = [];
    let count = 0;
    for (let i = 0; i < Math.floor(value); i++) {
        stars.push(<Star full key={count} />);
        count++;
    }
    if (value - Math.floor(value) != 0) {
        stars.push(<Star key={count} half />);
        count++;
    }
    while (count < 5) {
        stars.push(<Star key={count} />);
        count++;
    }
    return(
        <React.Fragment>
            { stars }
            <Value>{ value }</Value>
        </React.Fragment>
    );
};

export default StarsRating;