import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import NewAddOutletMenuModal from './Module/NewAddOutletModal';
import EditAddOutletMenuModal from './Module/EditAddOutletModal copy';

function TopSection() {
  const [addOutletModalOpen, setAddOutletModalOpen] = useState(false);
  const [editOutletModalOpen, setEditOutletModalOpen] = useState(false);
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
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
        onClick={() => setAddOutletModalOpen(true)}
      >
        Add a New Outlet
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
        onClick={() => setEditOutletModalOpen(true)}
      >
        Edit Outlet
      </Button>
    </Box>
    <NewAddOutletMenuModal open={addOutletModalOpen} setOpen={setAddOutletModalOpen} />
    <EditAddOutletMenuModal open={editOutletModalOpen} setOpen={setEditOutletModalOpen} />
    </>
  );
}

export default TopSection;
