/* Modules */
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const WordCloud = ({ data }) => {
    return (
        <ReactWordcloud words={data} options={{
            fontSizes: [40, 60],
            rotations: 0,
            rotationsAngles: [0, 90],
            spiral: 'archimedean',
            padding: 10,
            fontFamily: 'impact'
        }} />
    );
}

export default WordCloud;