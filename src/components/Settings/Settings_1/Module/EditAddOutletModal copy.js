import React, { useState } from "react";
import {
  Box,
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




const EditAddOutletMenuModal = ({ open, setOpen }) => {
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
           Update Outlet
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
              <CustomGridOutlinedInput label="Business Name" value="Enter The Business Name" sx="" lg="12" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Location" value="Location" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Email" value="Email" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Food Type" placeholder="" sx="1" lg="3" border="" marginBottom="1" radioOptions={radioOptions}/>
              
             
              
              <CustomGridOutlinedInput label="Mob.No" value="8586858687" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Website Link" value="http://saveEat.com" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Type of Business" value="Food" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="GSTIN Number" value="24Z5868C78X5" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="FSSAI Licence No." value="FSSAI-2545786" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
              <CustomGridOutlinedInput label="Reference No." value="RN4545454545" sx="1" lg="3" border="1px solid #D4D4D4" marginBottom="1" />
             
              <CustomGridOutlinedInput label="Outlet Logo" placeholder="" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" selectedFile={selectedFileOutletLogo} handleFileChange={handleFileChangeOutletLogo} acceptFile="image/*"/>
              <CustomGridOutlinedInput label="Outlet Banner" placeholder="" sx="1" lg="6" border="1px solid #D4D4D4" marginBottom="1" selectedFile={selectedFileOutletBanner} handleFileChange={handleFileChangeOutletBanner} acceptFile="'image/*'"/>

             
             
              
              
             
             
              

            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditAddOutletMenuModal;
