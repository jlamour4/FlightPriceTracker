// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const PageWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    height: '100%'
}));

export default PageWrapper;
