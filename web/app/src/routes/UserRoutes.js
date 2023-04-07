import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing

import Login from 'views/pages/authentication/authentication3/Login3';
import Register from 'views/pages/authentication/authentication3/Register3';
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const UserRoutes = {
    path: '/user',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        }
    ]
};

export default UserRoutes;
