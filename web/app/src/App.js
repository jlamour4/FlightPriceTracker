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

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

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
    );
};

export default App;
