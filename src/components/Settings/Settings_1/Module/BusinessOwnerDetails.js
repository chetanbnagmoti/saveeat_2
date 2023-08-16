import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputBase,
  InputLabel,
  ListItem,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import CustomGridOutlinedInput from "./CustomGridOutlinedInput";

function BusinessOwnerDetails() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#19abad' }}>Business Owner Details</Typography>
          </AccordionSummary>
          <Card sx={{border:"2px "}}>
          <AccordionDetails>
            <Typography>
              <Box
                component="form" //  onSubmit={submitHandler} noValidate
              >
                <Grid container spacing={2}>
                  <CustomGridOutlinedInput label="Name" placeholder="Enter Business Owner Name" lg="12" sx="" />
                  <CustomGridOutlinedInput label="Email" placeholder="Enter Business Owner Email" lg="12" sx="" />
                  <CustomGridOutlinedInput label=" Phone No." placeholder="Enter Business Owner Phone No." lg="12" sx="" />
                </Grid>
              </Box>
            </Typography>
          </AccordionDetails>
          </Card>
        </Accordion>
      </div>
    </>
  );
}

export default BusinessOwnerDetails;