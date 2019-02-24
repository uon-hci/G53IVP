/* Modules */
import React from 'react';
import Title from '../../Title';

const Introduction = (props) => {
    console.log(props);
    return(
        <React.Fragment>
            <Title color='red'>Introduction</Title>
            <p>Bla bla bla</p>
        </React.Fragment>
    );
};

export default Introduction;