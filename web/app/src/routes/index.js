import { useRoutes } from 'react-router-dom';

// routes
import HomeRoutes from './HomeRoutes';
import MainRoutes from './MainRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([HomeRoutes, MainRoutes, UserRoutes]);
}
