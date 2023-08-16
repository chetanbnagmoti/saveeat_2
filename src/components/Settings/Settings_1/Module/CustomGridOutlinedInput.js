import React from 'react';
import { Grid, FormLabel, OutlinedInput, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FileSelection from './FileSelection'; // Import the FileSelection component
const CustomGridOutlinedInput = ({ label, placeholder,lg,sx,marginBottom,border,value,radioOptions ,selectedFile, handleFileChange,acceptFile}) => {
  return (
    <Grid item lg={lg} sx={{ mt: sx }}>
      <FormLabel component="legend" className="label-heading" sx={{ marginBottom: marginBottom }}>
        {label}
      </FormLabel>
      {radioOptions ? (
        <FormControl>
          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            {radioOptions.map(option => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : selectedFile !== undefined && handleFileChange !== undefined ? (
        <FileSelection selectedFile={selectedFile} handleFileChange={handleFileChange} />
      ) : (
        <OutlinedInput
          sx={{ marginTop: '10px', height: 48, border: border }}
          fullWidth
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          aria-describedby="outlined-weight-helper-text"
        />
      )}

      
    </Grid>
  );
};

export default CustomGridOutlinedInput;
