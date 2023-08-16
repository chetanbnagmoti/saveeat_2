import React from "react";
import Modal from "@mui/material/Modal";
import "./modal.css";
import { Box, Button, FormLabel, IconButton, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const AddBulkItemModal = ({
  addBulkItemModalOpen,
  setaddBulkItemModalOpen,
}) => {
  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Modal
        BackdropProps={{
          onClick: handleBackdropClick, // Prevent backdrop click from closing
        }}
        className="AddNewItemModel"
        open={addBulkItemModalOpen}
        onClose={() => setaddBulkItemModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Bulk Add Items</Typography>
          <p style={{ margin: "0px", padding: "0px" }}>
            Please upload your items in the excel format provided below to bulk
            add items.
          </p>

          <IconButton
            style={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => setaddBulkItemModalOpen(false)}
          >
            <CloseOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>

          <Box height={30} />

          <FormLabel component="legend" className="label-heading">
            Upload Excel
          </FormLabel>
          <br />
          <div className="fileUpoption">
            <input
              type="file"
              name="image"
              id="file"
              accept=".jpg, .jpeg, .png"
            />
            <br />
          </div>

          <Box
            sx={{
              mt: 2,
              float: "right",
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Link to="">
              <Typography sx={{ color: "black" }}>Download Template</Typography>
            </Link>

            <Button
              variant="contained"
              sx={{
                "&": {
                  backgroundColor: "#96D780",
                },
                "&:hover": {
                  backgroundColor: "#96D780",
                },
              }}
              disableElevation
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddBulkItemModal;
