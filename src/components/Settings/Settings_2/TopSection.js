import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AddExceptionHolidayDialog from './Module/AddHolidyException';

function TopSection() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleOpenAddException = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Box
        sx={{
          color: "#000",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
      >
        Standard Opening Hours
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#96D780',
            '&:hover': {
              backgroundColor: '#96D780',
            },
            marginRight: '9px',
          }}
          disableElevation
        >
          Repeat Opening Hours
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#96D780',
            '&:hover': {
              backgroundColor: '#96D780',
            },
          }}
          disableElevation
          onClick={handleOpenAddException}
        >
          Add Exception/Holiday
        </Button>
      </Box>
      <AddExceptionHolidayDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </Box>
  );
}

export default TopSection
