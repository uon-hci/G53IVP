/* Modules */
import React from 'react';
import Wrapper from '../Wrapper';

/* Antd */
import { Typography, Tag } from 'antd';
const { Title, Paragraph, Text } = Typography;

/**
 * Introduction
 */
const Introduction = () => {
	return (
		<Wrapper>
			<Typography>
				<Tag>#playstore</Tag>
				<Tag>#visualization</Tag>
				<Tag>#business</Tag>
				<Title level={2}>Introduction</Title>
				<Paragraph>
					The Android application store,{' '}
					<a href="https://play.google.com/store">Google Play Store</a>, has
					become an invaluable platform for mobile technology with almost{' '}
					<Text strong>3 millions applications</Text> currently available, with
					goals such as entertainment, education, business, social, health and
					many others. Not only is this platform an absolute necessity for every
					Android user (77.45% of worldwide smartphone users), it is also the
					place where startups and companies can present their products to the
					public. It is therefore very important for any organization wishing to
					use the Play Store for business purposes to fully understand its
					content and its current state. Investigating such information through
					data analysis and visualization allows business entities to understand
					the users' desires, needs and adapt their products to the correct
					market.
				</Paragraph>
				<Title level={3}>Questions</Title>
				<Paragraph>
					In this data exploration, we will try to uncover and understand
					questions such as:
					<ul>
						<li>
							How are the categories integrated in the complex eco-system of
							applications? Are some categories more lucrative? Which ones have
							the most demands? Which ones seem to present better quality
							content?
						</li>
						<li>
							How does the users' inputs can be used to understand and improve
							applications experience? What words are usually describing a good,
							or a bad application? Are the reviews correlated with the ratings?
						</li>
						<li>
							How is the pricing handled? What is good price to select to ensure
							user engagement? Does good ratings mean higher prices?
						</li>
						<li>
							What are the technical aspects to consider as a developer? Is the
							size of an application an important metric to consider? Should the
							application support very old Android versions?
						</li>
						<li>
							What type of content is allowed and should be considered to engage
							users? Is the Playstore a paltform for all ages?
						</li>
					</ul>
				</Paragraph>
				<Title level={3}>Data set</Title>
				<Paragraph>
					The data set used in this project is composed of two databases:
					<ul>
						<li>
							A set containing 10k applications with details such as
							<em>
								category, rating, number of reviews, size, installations, price,
								content, updates, version support and current version release
							</em>
							,
						</li>
						<li>
							A set containing 30k reviews from users, describing their
							sentiments and feelings about an application.
						</li>
					</ul>
				</Paragraph>
			</Typography>
		</Wrapper>
	);
};

export default Introduction;
