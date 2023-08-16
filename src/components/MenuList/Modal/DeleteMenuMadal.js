import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const DeleteMenuMadal = ({ open, setOpen }) => {
  return (
    <>
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>Are you sure you want to delete this Item ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteMenuMadal;
