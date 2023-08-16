import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Box, Typography, FormLabel, Input, FormControl, Switch } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Holiday from './Holiday';

function AddExceptionHolidayDialog({ open, onClose }) {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');

    const handleSwitchChange = () => {
        setIsSwitchOn((prevIsSwitchOn) => !prevIsSwitchOn); // Toggle the value
    }

    const handleSave = () => {
        const data = {
            fromDate: fromDate,
            toDate: toDate,
            fromTime: fromTime,
            toTime: toTime,
            isSwitchOn: isSwitchOn
        };

        onClose(data); // Pass the data object as an argument
        console.log("Data collected:", data);
    }






    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle
                    sx={{
                        color: 'var(--alternate-brand-panel-color, #85D8D9)',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                    }}
                >
                    Add Exception
                </DialogTitle>
                <DialogContent>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item lg={9}>
                                <Typography
                                    sx={{
                                        color: 'var(--alternate-brand-panel-color, #85D8D9)',
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: 'normal',
                                        textDecorationLine: 'underline',
                                        marginBottom: "20px",
                                    }}
                                >
                                    Date
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                    }}
                                >
                                    <FormControl id="Item name" isRequired>
                                        <FormLabel sx={headingDate}>From</FormLabel>
                                        <Input type="date" required value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                                    </FormControl>
                                    <FormControl id="Item name" isRequired>
                                        <FormLabel sx={headingDate}>To</FormLabel>
                                        <Input type="date" required value={toDate} onChange={(e) => setToDate(e.target.value)} />
                                    </FormControl>
                                </Box>
                            </Grid>

                            <Grid item lg={3}>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Typography
                                        sx={{
                                            color: 'var(--alternate-brand-panel-color, #85D8D9)',
                                            fontFamily: 'Inter',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            lineHeight: 'normal',
                                            textDecorationLine: 'underline',
                                        }}
                                    >
                                        Outlet Status
                                    </Typography>
                                    <Box display="flex" alignItems="center" sx={{ marginTop: "20px", }}>
                                        <Switch
                                            color="success"
                                            size="medium"
                                            onChange={handleSwitchChange}
                                        />
                                        <Typography
                                            variant="body2"
                                            id="switch"
                                        // sx={{ marginLeft: '8px' }}
                                        >
                                            {isSwitchOn ? (
                                                <span style={{ color: '#4caf50' }}>Open</span>
                                            ) : (
                                                <span style={{ color: '#f44336' }}>Closed</span>
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item lg={9}>
                                <Typography sx={headingTime}>
                                    Time
                                </Typography>
                                <Box display="flex">
                                    <FormControl id="Item name" isRequired sx={{ marginRight: '50px' }}>
                                        <FormLabel>Opening Hours</FormLabel>
                                        <Input type="time" required value={fromTime} onChange={(element) => setFromTime(element.target.value)} />
                                    </FormControl>
                                    <FormControl id="Item name" isRequired sx={{ marginLeft: '8px' }}>
                                        <FormLabel>Closing Hours</FormLabel>
                                        <Input type="time" required value={toTime} onChange={(element) => setToTime(element.target.value)} />
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item lg={3}>
                                <AddCircleIcon fontSize="large" />
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="contained" disabled sx={{ width: "100px" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} variant="contained" sx={{ bgcolor: "#19abad", width: "100px" }} >
                        Save
                    </Button>

                </DialogActions>
            </Dialog>
        </>

    );
}

export default AddExceptionHolidayDialog;

let headingDate = {
    marginBottom: "-20px",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    color: "black",
    lineHeight: "normal",
}

let headingTime = {
    color: 'var(--alternate-brand-panel-color, #85D8D9)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textDecorationLine: 'underline',
    marginBottom: "25px",
    marginTop: "25px"
};
