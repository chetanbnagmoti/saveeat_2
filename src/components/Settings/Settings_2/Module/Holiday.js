import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box,
    FormControl,
    FormLabel,
    Input,
    Switch,
    Typography,
    IconButton,
    Grid,
} from '@mui/material';
import { FaEllipsisV, FaPlusCircle } from 'react-icons/fa';
import "./Holiday.css";
import DayTime from './DayTime';

let data = [{ id: 1, day: "Saturday ", date: "07/01/23", count: 0 }]

function Holiday() {
    const [arr, setArr] = useState(data);

    const handleInc = (id) => {
        setArr((prevArr) =>
            prevArr.map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el))
        );
    };

    const handleDec = (id) => {
        setArr((prevArr) =>
            prevArr.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
        );
    };

    return (
        <Box>
            <Typography
                sx={{
                    color: "#000",
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                    marginBottom: "50px",
                }}
            >
                Exceptions/ Holiday
            </Typography>

            <Box>

                <Box
                    sx={{
                        width: { base: '90vw', md: '80vw', lg: '65vw' },
                        margin: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Grid container spacing={5} pt={5} pb={5} sx={{ width: '100%', margin: 'auto' }}>
                        {arr.map((el) => (
                            <DayTime key={el.id} forDec={(id) => handleDec(id)} getId={(id) => handleInc(id)} {...el} />
                        ))}
                    </Grid>
                </Box>

            </Box>
        </Box>
    );
}

export default Holiday;
