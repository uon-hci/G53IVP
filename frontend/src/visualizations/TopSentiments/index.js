/* Modules */
import React, { useState, useEffect } from 'react';
import { ResponsiveRadar } from '@nivo/radar'

/* Antd */
import { Radio, Select } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const TopSentiments = ({ data }) => {
    const [sentimentApp, setSentimentApp] = useState({ sentiment: 'positive', app: 'ColorNote Notepad Notes' });
    const updateSentiment = (sentiment) => {
        if (sentiment != sentimentApp.sentiment) {
            setSentimentApp({ sentiment, app: data[sentiment][0].app });
        }
    }
    const apps = (data[sentimentApp.sentiment] && data[sentimentApp.sentiment]) || [];
    const reviews = (data[sentimentApp.sentiment] && data[sentimentApp.sentiment].filter(item => item.app == sentimentApp.app)[0].reviews) || [];
    return (
        <React.Fragment>
            <RadioGroup defaultValue='positive' onChange={(e) => updateSentiment(e.target.value)} style={{ marginBottom: '10px' }}>
                <RadioButton value='positive'>Positive</RadioButton>
                <RadioButton value='negative'>Negative</RadioButton>
            </RadioGroup><br />
            <Select defaultValue={sentimentApp.app} onChange={(app) => setSentimentApp({ ...sentimentApp, app }) } 
                style={{ width: 300, marginBottom: '20px' }}>
                { apps.map((item, i) => <Option value={item.app} key={i}>{ item.app }</Option>)}
            </Select>
            <ResponsiveRadar
                data={reviews}
                keys={[
                    'value'
                ]}
                indexBy='text'
                margin={{
                    "top": 50,
                    "right": 80,
                    "bottom": 180,
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
                    "scheme": "paired"
                }}
                fillOpacity={0.25}
                blendMode="multiply"
                legends={[]}
            />
        </React.Fragment>
    );
}

export default TopSentiments;