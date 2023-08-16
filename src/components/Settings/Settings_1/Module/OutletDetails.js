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

function OutletDetails() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#19abad' }}>Outlet POC Details</Typography>
        </AccordionSummary>
        <Card sx={{border:"2px "}}>
        <AccordionDetails>
        <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button
        sx={{
          backgroundColor: "#85D8D9",
          color: "white",
          borderRadius: "50%", // Set to 50% for a circular button
          height: "40px",      // Adjust height to make it more circular
          width: "40px",       // Adjust width to make it more circular
        }}
      >
        <AddIcon />
      </Button>
    </Box>
          <Typography>
            <Box
              component="form" //  onSubmit={submitHandler} noValidate
            >
              <Grid container spacing={2}>
              <CustomGridOutlinedInput label="Name"  placeholder="Enter Your Name" lg="5" />
              <CustomGridOutlinedInput label="Email"  placeholder="Enter Your Email" lg="4" />
              <CustomGridOutlinedInput label="Phone No."  placeholder="Enter Your Phone No." lg="3" />
              </Grid>
            </Box>
          </Typography>
        </AccordionDetails>
        </Card>
      </Accordion>
    </div>
  );
}

export default OutletDetails;