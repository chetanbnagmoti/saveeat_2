import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Switch,
  TableContainer,
} from "@mui/material";
import "./MenuComp.css";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditMenuModalBox from "./Modal/EditMenuModal";
import DeleteMenuMadal from "./Modal/DeleteMenuMadal";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const MenuComp = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [EditMenuModal, setEditMenuModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <TableContainer>
          <div className="menu-container">
            <div className="menu-contains">
          
              <div className="right">
                <p className="heading"> Default1 : 627 Items</p>
                <div style={{ display: "flex" }}>
                  <p className="sub-heading">
                    Created On :{" "}
                    <span style={{ fontWeight: "600" }}>05/06/2023</span>{" "}
                  </p>
                  <p className="sub-heading" style={{ marginLeft: "1rem" }}>
                    Craeted By :
                    <span style={{ fontWeight: 600 }}>Sneh Binny</span>
                  </p>
                </div>
              </div>

              <div className="left">
                <FormControlLabel control={<IOSSwitch defaultChecked />} />

                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => setEditMenuModal(true)}>
                    <ListItemIcon>
                      <ModeEditOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Edit Menu
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => setDeleteConfirm(true)}>
                    <ListItemIcon>
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Delete Menu
                  </MenuItem>
                </Menu>

                <KeyboardArrowDownIcon />
              </div>


            </div>
          </div>
        </TableContainer>
        {/* modal components */}
        <EditMenuModalBox open={EditMenuModal} setOpen={setEditMenuModal} />
        <DeleteMenuMadal open={deleteConfirm} setOpen={setDeleteConfirm} />
      </Box>
    </>
  );
};

export default MenuComp;
