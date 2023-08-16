import React from "react";
import ModalComp from "../../Modal/ModalComponent";
import { styled } from "@mui/material/styles";
import {
  FormLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

const columns = [
  { id: "select", label: "Select", minWidth: 150, align: "left" },
  { id: "item-name", label: "Item Name", minWidth: 80, align: "left" },
  { id: "food-price", label: "Food Price", minWidth: 80, align: "left" },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const NewCategoryModal = ({ open, setOpen }) => {
  return (
    <>
      <ModalComp open={open} setOpen={setOpen} title={"Create New Category"}>
        <Box
          component="form" //  onSubmit={submitHandler} noValidate
        >
          <Grid container spacing={1}>
            {/* ITEM NAME */}
            <Grid item lg={12}>
              <FormLabel component="legend" className="label-heading">
                Menu Category Name
              </FormLabel>

              <OutlinedInput
                sx={{ marginTop: "10px", height: 48 }}
                fullWidth
                autoComplete="off"
                placeholder="Menu Category Name"
                aria-describedby="outlined-weight-helper-text"
              />
            </Grid>

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Choose Menu Name
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

            <Grid item lg={6} sx={{ mt: 1 }}>
              <FormLabel component="legend" className="label-heading">
                Menu Category Order
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
          </Grid>

          <Box height={350} sx={{ overflowY: "auto", margin: "1rem 0px" }}>
            <FormLabel component="legend" className="label-heading">
              Menu Category Name
            </FormLabel>
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
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
      </ModalComp>
    </>
  );
};

export default NewCategoryModal;
