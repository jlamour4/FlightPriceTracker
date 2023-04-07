import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import HomeLayout from 'layout/HomeLayout';

// home routing
const HomePage = Loadable(lazy(() => import('views/home/HomePage')));
const AboutPage = Loadable(lazy(() => import('views/home/AboutPage')));
const LegalPage = Loadable(lazy(() => import('views/home/LegalPage')));
const ChangelogPage = Loadable(lazy(() => import('views/home/ChangelogPage')));
const StartupPage = Loadable(lazy(() => import('views/home/StartupPage')));

// ==============================|| HOME ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
        {
            path: 'legal',
            element: <LegalPage />
        },
        {
            path: 'about',
            element: <AboutPage />
        },
        {
            path: 'changelog',
            element: <ChangelogPage />
        },
        {
            path: 'startup',
            element: <StartupPage />
        }
    ]
};

export default HomeRoutes;
