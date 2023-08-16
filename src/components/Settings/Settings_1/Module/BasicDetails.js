import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button,Card,FormLabel, Grid, InputBase, Paper} from '@mui/material';

import Chip from '@mui/material/Chip';
import CustomGridOutlinedInput from './CustomGridOutlinedInput';

function BasicDetails() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDeleteTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleAddTag = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (

    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography sx={{ fontSize: '1.2rem', fontWeight: "bold", color: '#19abad' }}>Basic Details</Typography>
        </AccordionSummary>
        <Card sx={{border:"2px "}}>
        <AccordionDetails>
          <Typography>

            <Box
              component="form"  //  onSubmit={submitHandler} noValidate

            >
              <Grid container spacing={2}>
                <CustomGridOutlinedInput label="Location"  placeholder="Exact location as on google maps" lg="12" />
                <CustomGridOutlinedInput label="Locality"  placeholder="Andheri West" lg="6" sx="1" />
                <CustomGridOutlinedInput label="Outlet Phone No."  placeholder="8907623456" lg="6" sx="1" />
                
                
                <Grid item lg={12}>
                  <FormLabel component="legend" className="label-heading">
                    Cuisine
                  </FormLabel>
                  <Box
                    sx={{ marginTop: '10px', height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Type and press Enter to add a cuisine"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTag}
                    aria-describedby=""
                  >
                    <Paper
                      sx={{
                        display: 'flex',
                        alignItems: 'left',
                        gap: '4px',
                        padding: '4px',
                      }}
                    >
                      {tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          onDelete={handleDeleteTag(tag)}
                          style={{ margin: '4px' }}
                        />
                      ))}
                      <InputBase
                        sx={{ flex: 1 }}
                        fullWidth
                        autoComplete="off"
                        placeholder="Type and press Enter to add a cuisine"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleAddTag}
                        aria-describedby="outlined-weight-helper-text"
                      />
                    </Paper>

                  </Box>
                </Grid>
                <CustomGridOutlinedInput label="Outlet Logo" placeholder="" sx="1" lg="12" border="1px solid #D4D4D4" marginBottom="1" selectedFile={selectedFile} handleFileChange={handleFileChange} acceptFile="./add.pnj" />

              </Grid>



            </Box>

          </Typography>
        </AccordionDetails>
        </Card>
      </Accordion>
    </div>

  )
}


export default BasicDetails;