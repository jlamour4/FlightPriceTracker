import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { auth } from 'utils/firebase/firebase';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Button } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';

// assets
import { IconMenu2 } from '@tabler/icons';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //
const pages = [
    { label: 'How It Works', route: 'startup' },
    { label: 'About', route: 'about' },
    { label: 'Legal', route: 'legal' },
    { label: 'Changelog', route: 'changelog' }
];

const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    // const handlePageClick = (event, index, route = '') => {

    //   if (route && route !== '') {
    //       navigate(route);
    //   }
    // };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                navigate('/dashboard');
            } else {
                console.log('USER IS SIGNED OUT');
            }
        });
    });

    return (
        <>
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: 'block', flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button key={page.route} onClick={() => navigate(page.route)} sx={{ mx: 4, display: 'block', whiteSpace: 'nowrap' }}>
                        {page.label}
                    </Button>
                ))}
            </Box>
            <Box sx={{ width: 228, textAlign: 'right' }}>
                <Button onClick={() => navigate('user/login')}>
                    Log In
                    <ArrowRightAltIcon />
                </Button>
            </Box>
            {/* </Box> */}
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
