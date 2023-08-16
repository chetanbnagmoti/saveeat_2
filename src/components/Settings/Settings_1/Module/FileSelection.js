import React from 'react';
import { Box, Typography, Button, InputBase } from '@mui/material';

const FileSelection = ({ selectedFile, handleFileChange,acceptFile }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      <Typography variant="body1" color="textSecondary">
        {selectedFile ? selectedFile.name : 'No file chosen'}
      </Typography>
      <label htmlFor="file-input" style={{ display: 'inline-block', cursor: 'pointer', marginBottom: 1, border: "1px solid #D4D4D4", height: "30px" }}>
        <Button variant="contained" component="span" sx={{
          backgroundColor: "#85D8D9"
        }}>
          Choose File
        </Button>
        <InputBase
          id="file-input"
          type="file"
          inputProps={{ accept: acceptFile }}
          onChange={handleFileChange}
          sx={{ display: 'none'}}
        />
      </label>
    </Box>
  );
};

export default FileSelection;
