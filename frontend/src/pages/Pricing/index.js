/* Modules */
import React from 'react';
import Wrapper from '../Wrapper';
import Pie from '../../visualizations/Pie';
import Bar from '../../visualizations/Bar';
import Scatter from '../../visualizations/Scatter';
import WordCloud from '../../visualizations/WordCloud';
import TopSentiments from '../../visualizations/TopSentiments';
import Visualisation from '../../components/Visualisation';
import { Link } from 'react-router-dom';

/* Antd */
import { Typography, Tag, Card, Statistic, Row, Icon } from 'antd';
const { Title, Text, Paragraph } = Typography;

/**
 * General stats
 */
const Pricing = () => {
	return (
		<Wrapper>
			<Typography>
				<Tag>#prices</Tag>
				<Tag>#distribution</Tag>
				<Tag>#ratings</Tag>
				<Title level={2}>Pricing</Title>
			</Typography>
			<Visualisation
				title="Prices distribution"
				axis="price ($)"
				icon="dollar-sign"
				height="600px"
				url="playstore/distribution/prices?range=[0,20]&width=2&filter=price&price=0&sup=true"
				visualisation={Bar}
				description={
					<Typography>
						<Paragraph>
							In the <Link to="/general-stats">General Statistics</Link>, a pie
							chart demonstrated that a vast majority of the applications on the
							playstore are free. When companies or developers decide to make
							their application available only through payment, they must make a
							choice on the price range. The following bar chart displays the
							distribution for the prices of the majority of paid applications
							(outliers removed).
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							We can see that most of the paid applications are between $0
							(excluded) and $6. This is representative as it is fairly rare to
							find applications above these prices. Applications that exceed
							these prices are very specific applications in which the content
							provided helps the users learn skills (manuals, atlas, courses,
							handbooks, etc).
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Correlation between price and ratings"
				icon="star"
				axis={{ xmax: 30, ymin: 1, title: 'price ($)', color: 'nivo' }}
				height="600px"
				url="playstore/custom/prices_ratings_correlation?rmin=1"
				visualisation={Scatter}
				description={
					<Typography>
						<Paragraph>
							When buying an application, one can wonder it the price is
							justified. How are prices attributed on the Playstore? By taking a
							look at the correlation between ratings and prices, we can get an
							idea if paid application means good application.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							This scatter plot shows how applications with prices from 0 to 6
							don't really present any pattern. However above this price, the
							ratings start to converge to only higher values. This means that
							after a certain price threshold (~$6), the price is mainly
							justified by good quality of the application.
						</Paragraph>
					</Typography>
				}
			/>
		</Wrapper>
	);
};

export default Pricing;
