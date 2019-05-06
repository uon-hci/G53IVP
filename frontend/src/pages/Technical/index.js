/* Modules */
import React from 'react';
import Wrapper from '../Wrapper';
import Pie from '../../visualizations/Pie';
import Bar from '../../visualizations/Bar';
import Scatter from '../../visualizations/Scatter';
import Calendar from '../../visualizations/Calendar';
import TreeMap from '../../visualizations/TreeMap';
import Waffle from '../../visualizations/Waffle';
import Visualisation from '../../components/Visualisation';
import { Link } from 'react-router-dom';

/* Antd */
import { Typography, Tag, Card, Statistic, Row, Icon } from 'antd';
const { Title, Text, Paragraph } = Typography;

/**
 * General stats
 */
const Technical = () => {
	return (
		<Wrapper>
			<Typography>
				<Tag>#updates</Tag>
				<Tag>#sizes</Tag>
				<Tag>#versions</Tag>
				<Title level={2}>Technical</Title>
			</Typography>
			<Visualisation
				title="Updates"
				icon="calendar-alt"
				height="1200px"
				url="playstore/custom/updates"
				visualisation={Calendar}
				description={
					<Typography>
						<Paragraph>
							To maintain quality and user engagement, developers have to
							frequently update their application. In the following
							visualisation, the last update data for each application are shown
							and summed in the following calendar:
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							This calendar mainly demonstrates that most applications have
							fairly recent updates, and that applications that haven't been
							update for more than one year are more rare. The day, month or
							year doesn't seem to impact the number of updates. However, we
							notice in July-August 2018, a very high spike. During these weeks,
							many changes have been made to the playstore that could explain
							such unusual number of updates. First, Google re-organized the
							discovery algorithm, pushing many developers to update their
							application to avoid being left out by that new algorithm and
							continue engaging users (
							<a href="https://blog.getsocial.im/google-play-store-ranking-algorithm-changes-improve-discovery-of-your-app/">
								source
							</a>
							). Secondly, new rules regarding the allowed versions of Android
							were published, forcing new comers to support a new minimum
							version of Android, and existing applications new update as well (
							<a href="https://www.androidcentral.com/google-play-updates-2018">
								source
							</a>
							).
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Sizes by category"
				icon="save"
				height="600px"
				url="playstore/custom/size_tree"
				visualisation={TreeMap}
				description={
					<Typography>
						<Paragraph>
							Applications sometimes have significant build sizes. In this
							visualisation, we take a look at a proportionally constructed tree
							map that represents the total size for each category (in MB):
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							We can see that the categories <Text strong>Family</Text> and
							<Text strong>Game</Text> represent a major part of the sizes on
							the Playstore. This is logical as both categories contain many
							games and heavier interfaces, and are more numerous than the other
							categories (see{' '}
							<Link to="/general-stats">General Statistics</Link>).
						</Paragraph>
					</Typography>
				}
			/>
			<Visualisation
				title="Android versions support"
				icon="code-branch"
				height="600px"
				url="playstore/distribution/android_versions?skip=2"
				visualisation={Waffle}
				description={
					<Typography>
						<Paragraph>
							Android is often updated to fix and improve the experience of its
							users. This regular change in the operating system pushes the
							developers to make decisions between mataining the application for
							older versions or updating and improving their applications
							alongside new system features while taking the risk to exclude
							older devices, or trying to do handle all available versions. The
							following visualisation shows the distribution of versions
							support, with older versions on the left of the axis and recent
							ones on the right.
						</Paragraph>
					</Typography>
				}
				discussion={
					<Typography>
						<Paragraph>
							This shows that a large majority support only android versions
							from 4.0 and up. On the left and right, small portions represent
							applications that either support all versions from 1.5 and up,
							either only very recent versions.
						</Paragraph>
					</Typography>
				}
			/>
		</Wrapper>
	);
};

export default Technical;
