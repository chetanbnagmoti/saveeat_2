import {
  Box,
  Card,
  Table,
  TableContainer,
  TableHead,
  Typography,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#85D8D9",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const columns = [
  { id: "id", label: "Category Id ", minWidth: 150, align: "left" },
  { id: "name", label: "Name", minWidth: 50, align: "left" },
  {
    id: "C-Order",
    label: "Category Order",
    minWidth: 70,
    align: "left",
  },
  {
    id: "on-of-items",
    // label: "Size\u00a0(km\u00b2)",
    label: "No Of Items",
    minWidth: 50,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "created-on",
    label: "Created On",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "created-by",
    label: "Created By",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "window",
    // Size\u00a0(km\u00b2)
    label: "Window",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, name, order, itemCount, createdOn, createdBy, window) {
  return {
    id,
    name,
    order,
    itemCount,
    createdOn,
    createdBy,
    window,
  };
}

const rows = [
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
  createData(
    "MNAS001",
    "Egg Dry / Gravy",
    "10",
    "50",
    "09/08/2023",
    "siddhant",
    "9 AM to 11 Am"
  ),
];
const CategoryTableComp = () => {
  return (
    <>
      <Box>
        <Card sx={{ height: "auto", p: 1 }}>
          <TableContainer sx={{ maxHeight: 700 }}>
            <Table>
              <TableHead>
                <StyledTableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      //   align={column.align}
                      align="left"
                      style={{ minWidth: column.minWidth, border: "1px solid" }}
                    >
                      <Box
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
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
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, ind) => {
                  return (
                    <StyledTableRow
                      hover
                      key={ind}
                      role="checkbox"
                      tabIndex={-1}
                    >
                      <StyledTableCell>{row.id}</StyledTableCell>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell>{row.order}</StyledTableCell>
                      <StyledTableCell>{row.itemCount}</StyledTableCell>
                      <StyledTableCell>{row.createdOn}</StyledTableCell>
                      <StyledTableCell>{row.createdBy}</StyledTableCell>
                      <StyledTableCell>{row.window}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default CategoryTableComp;
