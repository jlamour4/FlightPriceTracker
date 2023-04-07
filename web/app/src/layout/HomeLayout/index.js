import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Customization from '../Customization';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';

// assets
import { IconChevronRight } from '@tabler/icons';

// ==============================|| HOME LAYOUT ||============================== //

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.homeContent
}));

const HomeLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const leftDrawerOpened = false;
    // Handle left drawer

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Header />
                </Toolbar>
            </AppBar>

            {/* main content */}
            <Main theme={theme} open={leftDrawerOpened}>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
        </Box>
    );
};

export default HomeLayout;
