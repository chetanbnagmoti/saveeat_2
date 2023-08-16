import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal, 
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CustomGridOutlinedInput from "./CustomGridOutlinedInput";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const NewAddOutletMenuModal = ({ open, setOpen }) => {
  const [selectedFileOutletLogo, setSelectedFileOutletLogo] = useState(null);
  const [selectedFileOutletBanner, setselectedFileOutletBanner] = useState(null);

  const handleFileChangeOutletLogo = (event) => {
    setSelectedFileOutletLogo(event.target.files[0]);
  };

  const handleFileChangeOutletBanner = (event) => {
    setselectedFileOutletBanner(event.target.files[0]);
  };

  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };
  
  const radioOptions = [
    { label: 'Non-Veg', value: 'Non-Veg' },
    { label: 'Veg', value: 'Veg' },
  ];

  return (
    <>
      <Modal
        BackdropProps={{
          onClick: handleBackdropClick,
        }}
        className="AddNewItemModel"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            Add Outlet
          </Box>
          <IconButton
            style={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => setOpen(false)}
          >
            <CloseOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>

          <Box height={30} />
          <Box
            component="form" //  onSubmit={submitHandler} noValidate
          >
            <Grid container spacing={1}>
              {/* Menu NAME */}
              <CustomGridOutlinedInput label="Business Name" placeholder="Enter The Business Name" sx="" lg="12" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Location" placeholder="Enter The Location" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Email" placeholder="Enter Your Email" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Food Type" placeholder="" sx="1" lg="3" border="" marginBottom="1" radioOptions={radioOptions}/>

              <CustomGridOutlinedInput label="Mob.No" placeholder="Enter Your Mob.No" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Website Link" placeholder="Enter Your Website Link" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Type of Business" placeholder="Enter Your Type of Business" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="GSTIN Number" placeholder="Enter Your GSTIN Numbers" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="FSSAI Licence No." placeholder="Enter Your FSSAI Licence No." sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Reference No." placeholder="Enter Your Reference No." sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />

             
              <CustomGridOutlinedInput label="Outlet Logo" placeholder="" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" selectedFile={selectedFileOutletLogo} handleFileChange={handleFileChangeOutletLogo} />
              <CustomGridOutlinedInput label="Outlet Banner" placeholder="" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" selectedFile={selectedFileOutletBanner} handleFileChange={handleFileChangeOutletBanner} />
              
              
             
             
              

            </Grid>

          </Box>
          <Box  >
                <Button variant="contained" >Add Outlet</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewAddOutletMenuModal;


