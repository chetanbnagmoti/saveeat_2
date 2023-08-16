import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  OutlinedInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const columns = [
  { id: "select", label: "Select", minWidth: 150, align: "left" },
  { id: "item-name", label: "Item Name", minWidth: 80, align: "left" },
  { id: "food-price", label: "Food Price", minWidth: 80, align: "left" },
];

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const NewMenuModal = ({ open, setOpen }) => {
  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

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
              <Grid item lg={12}>
                <FormLabel component="legend" className="label-heading">
                  Menu Name
                </FormLabel>

                <OutlinedInput
                  sx={{ marginTop: "10px", height: 48 }}
                  fullWidth
                  autoComplete="off"
                  placeholder="Menu Name"
                  aria-describedby="outlined-weight-helper-text"
                />
              </Grid>

              <Grid item lg={12} sx={{ mt: 1 }}>
                <FormLabel component="legend" className="label-heading">
                  Quantity
                </FormLabel>

                <Box height={350} sx={{ overflowY: "auto" }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <StyledTableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align="left"
                              style={{
                                minWidth: column.minWidth,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontWeight: "600",
                                    color: "black",
                                    fontSize: "13.5px",
                                  }}
                                >
                                  {column.label}
                                </Typography>
                              </Box>
                            </TableCell>
                          ))}
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <Checkbox></Checkbox>
                          </TableCell>
                          <TableCell>Lorem ipsum dolor</TableCell>
                          <TableCell>200</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                >
                  <Box>
                    <Typography>No of Items Selected : 1</Typography>
                  </Box>
                  <Box>
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
                      Create Menu
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewMenuModal;
