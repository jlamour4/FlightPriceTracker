import { useState } from 'react';
import { Avatar, Button, Divider, Grid, Autocomplete, TextField, Checkbox, Switch, Modal, Box } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';

import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/system';

import { STATIONS_DATA } from 'data/airports';
import { gridSpacing } from 'store/constant';

// third party
import * as Yup from 'yup';
// import { Formik } from 'formik';

import { Formik } from 'formik/dist';

// Firebase
import { ref, onValue, set, push } from 'firebase/database';
import { database } from 'utils/firebase/firebase';

// ==============================|| ADD FLIGHT MODAL ||============================== //

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    minWidth: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    p: 1
};

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor: blue[200]
}));

const GroupItems = styled('ul')({
    padding: 0
});

const sortDropdown = (a, b) => {
    if (!('regionName' in b)) {
        if (!('regionName' in a)) {
            return 0;
        } else {
            return -1;
        }
    } else if (!('regionName' in a)) {
        return 1;
    }

    return -b.regionName.localeCompare(a.regionName);
};

const dropdownFilter = (options, state) => {
    // if (state.inputValue.length < 3) {
    //     return [];
    // }
    return options.filter((option) => {
        if (
            option.displayName.toLowerCase().includes(state.inputValue.toLowerCase()) ||
            option.altSearchNames.find((name) => name.toLowerCase().includes(state.inputValue.toLowerCase()))
        ) {
            return option;
        }
    });
};

const FlightDropDown = ({ label, value, onChange }) => {
    const options = STATIONS_DATA;

    return (
        <Autocomplete
            id="grouped-dropdown"
            options={options.sort(sortDropdown)}
            groupBy={(option) => option.regionName}
            getOptionLabel={(option) => (option ? option.displayName : '')}
            // renderOption={}
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            filterOptions={dropdownFilter}
            sx={{ width: '100%' }}
            autoHighlight={true}
            renderInput={(params) => <TextField {...params} required label={label} />}
            renderGroup={(params) => (
                <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
        />
    );
};

const AddFlightsModal = ({ modalOpen, handleClose }) => {
    // const [addFlightModalOpen, setAddFlightModalOpen] = useState(modalOpen);
    const [departureLocation1, setDepartureLocation1] = useState('');
    const [departureLocation2, setDepartureLocation2] = useState('');

    const [arrivalLocation1, setArrivalLocation1] = useState('');
    const [arrivalLocation2, setArrivalLocation2] = useState('');

    const [date1, setDate1] = useState(dayjs());
    const [date2, setDate2] = useState(dayjs());

    const [time1, setTime1] = useState(dayjs('2023-04-17T12:00'));
    const [time2, setTime2] = useState(dayjs('2023-04-17T12:00'));

    const [addAnyTimeDeparture1, setAddAnyTimeDeparture1] = useState(true);
    const [addAnyTimeDeparture2, setAddAnyTimeDeparture2] = useState(true);

    const [addReturnFlight, setAddReturnFlight] = useState(false);

    const handleAddReturnFlight = (event) => {
        setAddReturnFlight(event.target.checked);
    };

    const handleAddAnyTimeDeparture1 = (event) => {
        setAddAnyTimeDeparture1(event.target.checked);
    };

    const handleAddAnyTimeDeparture2 = (event) => {
        setAddAnyTimeDeparture2(event.target.checked);
    };

    const submitFlight = () => {
        console.log('SUBMITTING');
        if (addReturnFlight) {
        } else {
            console.log(departureLocation1.id);
            console.log(arrivalLocation1.id);
            console.log(date1.format('YYYY/MM/DD')); // TODO convert date
            if (addAnyTimeDeparture1) {
                // Time should be set to null
                push(ref(database, 'flights/'), {
                    departureDate: date1.format('YYYY/MM/DD'),
                    originLocation: departureLocation1.id,
                    destinationLocation: arrivalLocation1.id
                });
            } else {
                // Use Time value
                console.log(time1.format('h:mm A'));
                push(ref(database, 'flights/'), {
                    departureDate: date1.format('YYYY/MM/DD'),
                    time: time1.format('h:mm A'),
                    originLocation: departureLocation1.id,
                    destinationLocation: arrivalLocation1.id
                });
            }
        }
    };

    return (
        <Modal open={modalOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <MainCard title="Add Flight" secondary={<></>}>
                    <Grid container direction="column" spacing={gridSpacing}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <SubCard title="Departing Flight">
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FlightDropDown label="DEPART" value={departureLocation1} onChange={setDepartureLocation1} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FlightDropDown label="ARRIVE" value={arrivalLocation1} onChange={setArrivalLocation1} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5}>
                                        <DatePicker label="Date" value={date1} onChange={(newValue) => setDate1(newValue)} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5}>
                                        <FormControlLabel
                                            control={<Checkbox checked={addAnyTimeDeparture1} onChange={handleAddAnyTimeDeparture1} />}
                                            label="Any Time"
                                        />
                                        <TimePicker
                                            label="Time of Departure"
                                            value={time1}
                                            minutesStep={5}
                                            onChange={(newValue) => setTime1(newValue)}
                                            disabled={addAnyTimeDeparture1}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Switch checked={addReturnFlight} onChange={handleAddReturnFlight} />}
                                            label="Add Returning Flight"
                                        />
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                        {addReturnFlight ? (
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <SubCard title="Returning Flight">
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <FlightDropDown label="DEPART" value={departureLocation2} onChange={setDepartureLocation2} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <FlightDropDown label="ARRIVE" value={arrivalLocation2} onChange={setArrivalLocation2} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5}>
                                            <DatePicker label="Date" value={date2} onChange={(newValue) => setDate2(newValue)} />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={5}>
                                            <FormControlLabel
                                                control={<Checkbox checked={addAnyTimeDeparture2} onChange={handleAddAnyTimeDeparture2} />}
                                                label="Any Time"
                                            />
                                            <TimePicker
                                                label="Time of Departure"
                                                value={time2}
                                                minutesStep={5}
                                                onChange={(newValue) => setTime2(newValue)}
                                                disabled={addAnyTimeDeparture2}
                                            />
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid container justifyContent="flex-end" spacing={gridSpacing} paddingTop={gridSpacing}>
                        <Grid item>
                            <Button onClick={handleClose} variant="text" color="info" sx={{ boxShadow: 'none' }}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={submitFlight} variant="contained" color="primary" sx={{ boxShadow: 'none' }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
            </Box>
        </Modal>
    );
};

export default AddFlightsModal;
