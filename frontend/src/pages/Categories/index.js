/* Modules */
import React from 'react';
import Wrapper from '../Wrapper';
import InstallsByCategory from '../../visualizations/Bar/InstallsByCategory';
import FreePaidByCategory from '../../visualizations/Bar/FreePaidByCategory';
import TopInstallsByCategory from '../../visualizations/TopInstallsByCategory';
import CategoryGenres from '../../visualizations/CategoryGenres';
import Visualisation from '../../components/Visualisation';
import { Link } from 'react-router-dom';

/* Antd */
import { Typography, Tag, Card, Statistic, Row, Icon } from 'antd';
const { Title, Text, Paragraph } = Typography;

/**
 * Categories
 */
const Categories = () => {
	return (
		<Wrapper>
			<Typography>
				<Tag>#category</Tag>
				<Tag>#installations</Tag>
				<Tag>#genre</Tag>
				<Tag>#prices</Tag>
				<Tag>#ratings</Tag>
				<Tag>#best</Tag>
				<Title level={2}>Categories</Title>
			</Typography>
			<Visualisation
				title="Number of installations by category"
				icon="list"
				height="800px"
				url="playstore/sum/installs?by=category&ordered=desc"
				visualisation={InstallsByCategory}
				description={
					<Typography>
						<Paragraph>
							In the <Link to="/general-stats">General Statistics </Link>
							we computed the most common categories,{' '}
							<Text strong>Family, Game, Tools, Medical, Business</Text> and
							<Text strong> Productivity</Text>, as in these were the categories
							with the most amount of applications. This however doesn't imply
							popularity. To learn about the most popular categories, we must
							focus on another, perhaps more representative metric:
							installations. The number of installations of an application
							represent how many times users downloaded and installed it.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							This graph shows that not all the categories previously labeled as
							common can be labeled popular.{' '}
							<Text strong>Game, Productivity, Family</Text> and{' '}
							<Text strong>Tools</Text> are in the top, while categories{' '}
							<Text strong>Medical</Text> and <Text strong>Business </Text>
							are far behind. Another interesting discovery of the categories{' '}
							<Text strong>Communication </Text>
							and <Text strong>Social</Text> that appear in the top 5. This can
							probably be explained by the very famous social networks widely
							used across the world.
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Top apps by category"
				icon="trophy"
				height="600px"
				url="playstore/sum/installs?by=app&filter=category&category=SOCIAL&ordered=desc&limit=10"
				visualisation={TopInstallsByCategory}
				description={
					<Typography>
						<Paragraph>
							Indeed we can see using this interactive table that the categories{' '}
							<Text strong>Social </Text> and <Text strong>Communication </Text>
							contain applications such as Facebook, Instagram, Snapchat, Gmail,
							Messenger, WhatsApp and more that are widely used everywhere in
							the world.
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Number of free and paid  apps by category"
				icon="dollar-sign"
				height="900px"
				url="playstore/custom/free_paid_category"
				visualisation={FreePaidByCategory}
				description={
					<Typography>
						<Paragraph>
							In the <Link to="/general-stats">General Statistics </Link> a pie
							chart was used to show the distribution of free and paid
							applications throughout the Playstore. How does that relate for
							each category? Are there categories more expensive than others?
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							This graph shows that the categories
							<Text strong> Personalization </Text> and{' '}
							<Text strong>Medical </Text>
							are the ones containing a larger amount of paid applications,
							followed by the
							<Text strong> Books and Reference </Text> and the{' '}
							<Text strong>Weather</Text>. Perhaps this could be explained by
							the fact that these categories contain applications that mainly
							offer a specific feature, service or tool that the user will then
							own (an instance of it) to use indefinitely ; while categories
							like <Text strong>Social </Text> offer plateforms and services
							that user do not own but only have access to.
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Ratings by category and genres"
				icon="star"
				height="500px"
				url="playstore/custom/genre_list_category"
				visualisation={CategoryGenres}
				description={
					<Typography>
						<Paragraph>
							In addition to categories, the Playstore also presents
							sub-categories, called genres, that can help users divide the big
							categories into smaller ones. This is for example mostly used for
							the categories <Text strong>Family </Text> and{' '}
							<Text strong>Game </Text>
							that are very broad and popular sections with a lot of possible
							sub-sections. The following visualisation allows you to browse
							these categories and genres and see their corresponding ratings.
						</Paragraph>
					</Typography>
				}
			/>
		</Wrapper>
	);
};

export default Categories;
