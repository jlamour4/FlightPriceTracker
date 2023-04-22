import { Grid, Link, Button } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import AddFlightsModal from 'views/dashboard/Default/AddFlightsModal';
import { useState } from 'react';

import AnimateButton from 'ui-component/extended/AnimateButton';
import AddIcon from '@mui/icons-material/Add';

const AddFlights = ({ handleAddFlight }) => {
    return (
        <AnimateButton>
            <Button onClick={handleAddFlight} variant="contained" color="primary" sx={{ boxShadow: 'none' }}>
                <AddIcon fontSize="medium" color="inherit" />
                Add Flight
            </Button>
        </AnimateButton>
    );
};

// ==============================|| FLIGHTS ||============================== //

const Flights = () => {
    const [addFlightModalOpen, setAddFlightModalOpen] = useState(false);

    const handleClose = () => {
        setAddFlightModalOpen(false);
    };

    const handleAddFlight = () => {
        setAddFlightModalOpen(true);
    };

    return (
        <>
            <MainCard title="Flights" secondary={<AddFlights handleAddFlight={handleAddFlight} />}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <SubCard title="My Flights">
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <MuiTypography variant="h1" gutterBottom>
                                        h1. Heading
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="h2" gutterBottom>
                                        h2. Heading
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="h3" gutterBottom>
                                        h3. Heading
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="h4" gutterBottom>
                                        h4. Heading
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="h5" gutterBottom>
                                        h5. Heading
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="h6" gutterBottom>
                                        h6. Heading
                                    </MuiTypography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <SubCard title="All Flights">
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <MuiTypography variant="subtitle1" gutterBottom>
                                        subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                                    </MuiTypography>
                                </Grid>
                                <Grid item>
                                    <MuiTypography variant="subtitle2" gutterBottom>
                                        subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                                    </MuiTypography>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>

            <AddFlightsModal modalOpen={addFlightModalOpen} handleClose={handleClose}></AddFlightsModal>
        </>
    );
};

export default Flights;
