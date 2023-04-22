import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const TrackingFlights = Loadable(lazy(() => import('views/tracking/Flights')));
const TrackingDates = Loadable(lazy(() => import('views/tracking/Dates')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <DashboardDefault />
        },
        {
            path: 'tracking-flights',
            element: <TrackingFlights />
        },
        {
            path: 'tracking-dates',
            element: <TrackingDates />
        }
        // {
        //     path: 'icons',
        //     children: [
        //         {
        //             path: 'material-icons',
        //             element: <UtilsMaterialIcons />
        //         }
        //     ]
        // },
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // }
    ]
};

export default MainRoutes;
