/* Pages */
import Introduction from './pages/Introduction';
import GeneralStats from './pages/GeneralStats';
import Categories from './pages/Categories';
import Reviews from './pages/Reviews';

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
    },
    {
        name: 'Categories',
        path: '/categories',
        component: Categories,
        icon: 'appstore'
    },
    {
        name: 'Reviews',
        path: '/reviews',
        component: Reviews,
        icon: 'star'
    }
];

export default routes;