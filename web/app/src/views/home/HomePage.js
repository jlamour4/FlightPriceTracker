import { Button, Box, createTheme, ThemeProvider } from '@mui/material';

import PageWrapper from './PageWrapper';

const HomePage = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#304CB2'
            },
            info: {
                main: '#CCCCCC'
            },
            secondary: {
                main: '#FFBF27'
            }
        }
    });

    const styles = {
        mainText: {
            fontSize: 70,
            textAlign: 'center',
            fontWeight: 800,
            width: 'calc(100vw - 50%)',
            lineHeight: 1.1,
            color: 'var(--southwest-yellow)',
            userSelect: 'none'
        },
        secondaryText: {
            fontSize: 20,
            marginTop: 20,
            userSelect: 'none'
        },
        buttons: {
            lineHeight: 2.5,
            m: 1
        }
    };
    return (
        <>
            <PageWrapper>
                {/* <div style={{ height: '100%' }}> */}
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        height: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box sx={styles.mainText}>
                        <div>Find the best prices on</div>
                        <div>Southwest Airlines flights</div>
                    </Box>
                    <Box sx={styles.secondaryText}>Create an account to start adding flights and times to track</Box>
                    <Box sx={{ mt: 5 }}>
                        <ThemeProvider theme={theme}>
                            <Button sx={styles.buttons} variant="contained">
                                Get started
                            </Button>
                            <Button sx={styles.buttons} color="info" variant="contained">
                                Learn more
                            </Button>
                        </ThemeProvider>
                    </Box>
                </Box>
                {/* </div> */}
            </PageWrapper>
        </>
    );
};

export default HomePage;
