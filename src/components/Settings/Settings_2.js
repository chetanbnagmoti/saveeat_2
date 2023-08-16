import React, { useState } from 'react'

import { Box, Grid } from '@mui/material';
import DayTime from './Settings_2/Module/DayTime';
import Holiday from './Settings_2/Module/Holiday';

let data=[{id:1,day:"Monday",count:0},{id:2,day:"Tuesday",count:0},{id:3,day:"Wednesday",count:0},{id:4,day:"Thursday",count:0},{id:5,day:"Friday",count:0},
{id:6,day:"Saturday",count:0},{id:7,day:"Sunday",count:0}]

function Settings_2() {
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
      <>
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
        <Box>
          <Holiday />
        </Box>
      </>
    );
  }
export default Settings_2