import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useEffect } from 'react';

import { auth } from 'utils/firebase/firebase';
import { AuthProvider } from 'Auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserProfile from 'features/user/userProfile';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const queryClient = new QueryClient();
    // const authListener = () => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             console.log(user);
    //             // setName(user.displayName);
    //             // setImageSrc(user.photoURL);
    //         } else {
    //             console.log('USER IS SIGNED OUT');
    //         }
    //     });
    // };
    // useEffect(() => {
    //     authListener();
    // }, []);

    // const user = useSelector((state) => state.user);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <AuthProvider>
                            <Routes />
                        </AuthProvider>
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </LocalizationProvider>
    );
};

export default App;
