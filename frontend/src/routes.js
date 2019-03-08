/* Pages */
import Introduction from './Content/Introduction';
import GeneralStats from './Content/GeneralStats';

/* Routes */
const routes = [
    {
        name: 'Introduction',
        path: '/',
        component: Introduction,
        icon: 'bars'
    },
    {
        name: 'General stats',
        path: '/general-stats',
        component: GeneralStats,
        icon: 'pie-chart'
    }
];

export default routes;