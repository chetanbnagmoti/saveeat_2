import React from "react";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({ open, setOpen, children, title }) => {
  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Modal
        BackdropProps={{
          onClick: handleBackdropClick,
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">{title}</Typography>
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
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
