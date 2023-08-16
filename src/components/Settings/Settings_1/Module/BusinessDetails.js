import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card, FormControl, FormLabel, Grid, Input, InputBase, InputLabel, ListItem, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Chip from '@mui/material/Chip';
import CustomGridOutlinedInput from "./CustomGridOutlinedInput";

function BusinessDetails() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#19abad' }}>Business Details</Typography>
        </AccordionSummary>
        <Card sx={{border:"2px "}}>
        <AccordionDetails>
          <Typography>
            <Box
              component="form" //  onSubmit={submitHandler} noValidate
            >
              <Grid container spacing={2}>
                <CustomGridOutlinedInput label=" Registered Name" placeholder="Enter Your Registered Name" lg="12" />
                <CustomGridOutlinedInput label="Brand Name" placeholder="Andheri West" lg="6" sx="" />
                <CustomGridOutlinedInput label="Ownership Type" placeholder="Ownership Type" lg="6" sx="" />
                <CustomGridOutlinedInput label="Signing Authority Email ID" placeholder="Signing Authority Email ID" lg="6" sx="" />
                <CustomGridOutlinedInput label="Email ID" placeholder="Email ID" lg="6" sx="" />
                <CustomGridOutlinedInput label="Type of Business" placeholder="Cloud Kitchen" lg="3" sx="" />
                <CustomGridOutlinedInput label="GSTIN Number" placeholder="GSTIN Number" lg="3" sx="" />
                <CustomGridOutlinedInput label="FSSAI Licence No." placeholder="FSSAI Licence No." lg="3" sx="" />
                <CustomGridOutlinedInput label="Reference No." placeholder="Reference No." lg="3" sx="" />

                <Grid item lg={12}>

                  <FormLabel component="legend" className="label-heading" >
                    Billing Address
                  </FormLabel>
                  <OutlinedInput
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    autoComplete="off"
                    placeholder="Street Address"
                    aria-describedby="outlined-weight-helper-text"
                  ></OutlinedInput>
                  <Grid />
                  <Grid>

                    <OutlinedInput
                      sx={{ marginTop: "10px", height: 48 }}
                      fullWidth
                      autoComplete="off"
                      placeholder="Address Line 2"
                      aria-describedby="outlined-weight-helper-text"
                    ></OutlinedInput>


                  </Grid>

                  <Grid container spacing={2}>
                    <CustomGridOutlinedInput label="" placeholder="City" lg="4" sx="" />
                    <CustomGridOutlinedInput label="" placeholder="State" lg="4" sx="" />
                    <CustomGridOutlinedInput label="" placeholder="ZipCode" lg="4" sx="" />
                  </Grid>


                </Grid>




              </Grid>
            </Box>
          </Typography>
        </AccordionDetails>
       </Card>
      </Accordion>
    </div>
  );
}

export default BusinessDetails;