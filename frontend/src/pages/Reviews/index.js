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
const Reviews = () => {
	return (
		<Wrapper>
			<Typography>
				<Tag>#quantiles</Tag>
				<Tag>#ratings</Tag>
				<Tag>#reviews</Tag>
				<Tag>#words</Tag>
				<Tag>#descriptions</Tag>
				<Title level={2}>Reviews</Title>
			</Typography>
			<Card title="Ratings overview" style={{ marginBottom: '16px' }}>
				<Row type="flex" justify="space-around">
					<Statistic title="Minimun" value="1.0" />
					<Statistic title="Quartile 1" value="2.59" />
					<Statistic title="Average" value="4.17" />
					<Statistic title="Quartile 3" value="4.58" />
					<Statistic title="Maximum" value="5.0" />
				</Row>
			</Card>
			<Visualisation
				title="Correlation between reviews and ratings"
				axis={{ xmax: 8000000, title: 'reviews', ymin: 4 }}
				icon="list"
				height="600px"
				url="playstore/custom/reviews_ratings_correlation"
				visualisation={Scatter}
				description={
					<Typography>
						<Paragraph>
							In the <Link to="/general-stats">General Statistics </Link> as
							well as in the section <Link to="/general-stats">Categories</Link>
							, bar charts show the distribution of the ratings, with a clear
							dominance of values between 4.0 and 5.0. However, these charts
							don't account for the important metric responsible for these
							ratings: the reviews and how many of them are used to compute such
							results. Before going in more details regarding the content of
							these reviews, the following scatter plot shows the correlation
							between the number of reviews and the resulting ratings.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							While limited to reviews from 4.0 to 5.0 and a number of reviews
							to 8 millions (maximum of 80 millions reviews for Facebook) for
							readability reasons, this graph clearly shows a correlation
							between reviews and ratings. With more and more reviews the
							ratings converge to values between 4.3 and 4.7. High ratings like
							4.9 and 5.0 seem to only be possible with small amounts of
							reviews.
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Word cloud"
				icon="cloud"
				height="500px"
				url="playstore/custom/reviews_text_mining"
				visualisation={WordCloud}
				description={
					<Typography>
						<Paragraph>
							Reviews are often accompanied of written comments from users that
							wish to justify their rating or make demands. These comments are a
							great source to understand how users perceive applications. The
							following word cloud is generated based on thousands of reviews.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							The resulting words clearly outline the general types of comments
							given for applications:
							<ul>
								<li>
									Sentiments on the application (
									<Text strong>good, best, bad, fun, nice, love</Text>)
								</li>
								<li>
									Comments about features of the application (
									<Text strong>money, free, ad, works, version, news</Text>)
								</li>
								<li>
									Requests or demands (
									<Text strong>
										wish, want, please, help, problem, fix, change
									</Text>
									).
								</li>
							</ul>
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Words for positive and negative reviews"
				icon="comments"
				height="700px"
				url="playstore/custom/top_sentiments?wordlimit=6"
				visualisation={TopSentiments}
				description={
					<Typography>
						<Paragraph>
							Reviews can either be positive, neutral or negative about an
							application. In this data context, this metric is called the
							sentiment of the review. To see how positive and negative reviews
							can be analysed and understand how users perceive applications,
							the following visualisation allows you to browse the top 10
							applications with the highest number of positive reviews, and
							respectively for negative sentiments. For each application, a
							radar plot displays the top 6 words used in these reviews.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							Patterns between positive and negative sentiments can be outlined.
							For negative applications, words like{' '}
							<Text strong>ads, time, money, freezes, hate, please, give</Text>{' '}
							demonstrate the tendancy for users to comment about money issues,
							bugs with the app, specific demands or simple unhapiness with the
							application. On other hands, positive applications show reviews
							with more emphasis on how users appreciate the application and the
							features (<Text strong>love, like, great, easy,good</Text>).{' '}
						</Paragraph>
					</Typography>
				}
			/>
		</Wrapper>
	);
};

export default Reviews;
