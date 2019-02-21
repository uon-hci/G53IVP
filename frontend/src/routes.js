/* Pages */
import Introduction from './pages/Introduction';
import GeneralStats from './pages/GeneralStats';

/* Routes */
const routes = [
    {
        name: 'introduction',
        path: '/',
        component: Introduction,
    },
    {
        name: 'general stats',
        path: '/general-stats',
        component: GeneralStats
    }
];

export default routes;