/* Modules */
import React, { useState, useEffect } from 'react';
import { ResponsiveRadar } from '@nivo/radar'

/* Antd */
import { Radio, Select } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

/**
 * TODO: Global data (from parent) loads the list of both negative and positive top apps
 * TODO: handle all visualizing internally (no more api calls)
 */

const TopSentiments = ({ data, setUrl }) => {
    const [selectedApp, setSelectedApp] = useState('ColorNote Notepad Notes');
    const updateSentiment = (sentiment) => {
        if (sentiment == 'negative') { setSelectedApp('Angry Birds Classic'); }
        setUrl(`playstore/custom/top_sentiments/${sentiment}?wordlimit=5`);
    }
    if (data.sentiment) {
        const reviews = data.data.filter(item => item.app == selectedApp)[0].reviews;
        return (
            <React.Fragment>
                <RadioGroup defaultValue='positive' onChange={(e) => updateSentiment(e.target.value)} style={{ marginBottom: '10px' }}>
                    <RadioButton value='positive'>Positive</RadioButton>
                    <RadioButton value='negative'>Negative</RadioButton>
                </RadioGroup><br />
                <Select defaultValue={selectedApp} onChange={(app) => setSelectedApp(app) } 
                    style={{ width: 300, marginBottom: '20px' }}>
                    { data.data.map((item, i) => <Option value={item.app} key={i}>{ item.app }</Option>)}
                </Select>
                <ResponsiveRadar
                    data={reviews}
                    keys={[
                        'value'
                    ]}
                    indexBy='text'
                    margin={{
                        "top": 70,
                        "right": 80,
                        "bottom": 150,
                        "left": 80
                    }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{
                        "from": "color"
                    }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{
                        "theme": "background"
                    }}
                    dotBorderWidth={2}
                    dotBorderColor={{
                        "from": "color"
                    }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{
                        "scheme": "nivo"
                    }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    legends={[]}
                />
            </React.Fragment>
        );
    } else {
        return null;
    }
}

export default TopSentiments;