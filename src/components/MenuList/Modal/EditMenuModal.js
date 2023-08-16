import React from "react";
import Modal from "@mui/material/Modal";
import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
  Button,
} from "@mui/material";
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

const EditMenuModal = ({ open, setOpen }) => {
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
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Update Items</Typography>

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
              {/* ITEM NAME */}
              <Grid item lg={12}>
                <FormLabel component="legend" className="label-heading">
                  {" "}
                  Item Name{" "}
                </FormLabel>

                <OutlinedInput
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  autoComplete="off"
                  placeholder="Item Name"
                  aria-describedby="outlined-weight-helper-text"
                />
              </Grid>

              {/* IMAGE */}
              <Grid item lg={12} sx={{ mt: 1 }}>
                <div
                  className="fileUpoption"
                  style={
                    {
                      //   marginTop: "10px",
                    }
                  }
                >
                  <input
                    type="file"
                    name="image"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                  />
                  <br />
                </div>
              </Grid>

              {/* TYPE  */}
              <Grid item lg={6} sx={{ mt: 1 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="label-heading">
                    Food Type
                  </FormLabel>

                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row", gap: 10 }}
                    aria-label="options"
                    name="options"
                    // value={selectedValue}
                    // onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Veg"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="Non-Veg"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* TAX */}
              <Grid item lg={6} sx={{ mt: 1 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="label-heading">
                    Tax Type
                  </FormLabel>

                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row", gap: 10 }}
                    aria-label="options"
                    name="options"
                    // value={selectedValue}
                    // onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label="Taxable"
                    />
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label="MRP"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* TAX RATE */}
              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Tax Rate
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Cusine
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Sub Cusine
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  weight (in gms)
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Food Price
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item lg={4} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Variants
                </FormLabel>
                <Select
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  defaultValue="Select Type"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>

              {/* ITEM WINDOW */}
              <Grid item lg={12}>
                <FormLabel component="legend" className="label-heading">
                  Item Window
                </FormLabel>
              </Grid>

              <Card
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
                <Grid item lg={5} sx={{ mt: 1 }}>
                  <FormLabel component="legend" className="label-heading">
                    From
                  </FormLabel>
                  <Select
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    defaultValue="Select Type"
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>

                <Grid item lg={5} sx={{ mt: 1, ml: 1 }}>
                  <FormLabel component="legend" className="label-heading">
                    To
                  </FormLabel>
                  <Select
                    sx={{ marginTop: "10px", height: 48 }}
                    fullWidth
                    defaultValue="Select Type"
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>
              </Card>

              <Grid
                item
                lg={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
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
                  // onClick={}
                >
                  Update Item
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditMenuModal;
