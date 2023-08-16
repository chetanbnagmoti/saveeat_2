import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, InputBase, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";

const navigationData = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "Menu",
    value: "/menu",
    subMenus: [
      { label: "Menu", value: "/menu" },
      { label: "Category", value: "/category" },
      { label: "Choice", value: "/product2" },
      { label: "Items", value: "/items" },
    ],
  },

  {
    label: "Reports",
    value: "/report",
  },
  {
     label: "Settings",
     value: "/setting",
     subSettinngs:[
      {label:"Setting-1",value:"/Setting-1"},
      {label:"Setting-2",value:"/Setting-2"},
    ]
  },
  {
    label: "Help",
    value: "/help",
  },
  {
    label: <PersonOutlineOutlinedIcon />,
    value: "/account",
  },
];

const FormatText = styled("h1")({
  fontSize: "25px",
  lineHeight: "36px",
  fontFamily: "FontFamily(Font(R.font.poppins))",
  color: "black",
  fontWeight: "600",
});

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [settingMenuAnchor, setSettingMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleSettingMenuOpen=(event)=>{
    setSettingMenuAnchor(event.currentTarget);
  }

  const handleSettingMenuClose=()=>{
    setSettingMenuAnchor(null);

  }
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {/* preNavBar */}
      <Box
        bgcolor="#96D780"
        height={48}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ p: "0.5rem", margin: "1rem" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            Items On Discount: 0
          </Typography>
        </Box>

        <Box
          sx={{
            p: "0.2rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Box sx={{ position: "relative", display: "flex" }}>
            <InputBase
              placeholder="Add items on discount......"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#fff",
                paddingLeft: "8px",
                paddingRight: "36px",
                height: "32px",
                width: "35vw",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ fontSize: "20px", fontWeight: "600" }} />
            </Box>
          </Box>
          <Box sx={{ margin: "0px 1rem" }}>
            <InfoOutlinedIcon onClick={logoutHandler} />
          </Box>
        </Box>
      </Box>

      {/* Main app bar */}
      <Box>
        <AppBar
          sx={{
            backgroundColor: "#85D8D9",
            height: "70px",
            marginTop: "48px",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginLeft: "8px" }}
              style={{
                color: "black",
              }}
            >
              <Link to="/">
                <Box
                  component="img"
                  sx={{ height: 54 }}
                  alt="Logo"
                  src="/images/logo.png"
                  style={{
                    height: "1.5rem",
                    width: "5rem",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </Link>
            </Typography>

            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {navigationData.map(({ label, value, subMenus ,subSettinngs}) => (
                <Box key={label}>
                  {subMenus ? (
                    <Button
                      sx={{ color: "#fff", margin: "1rem", cursor: "pointer" }}
                      onClick={handleMenuOpen}
                    >
                      <Typography color="black" fontWeight="600">
                        {label}
                      </Typography>
                    </Button>
                  ) :subSettinngs ? (
                    <Button
                      sx={{ color: "#fff", margin: "1rem", cursor: "pointer" }}
                      onClick={handleSettingMenuOpen}
                    >
                      <Typography color="black" fontWeight="600">
                        {label}
                      </Typography>
                    </Button>
                  ) :  (
                    <Button
                      sx={{ color: "#fff", margin: "1rem" }}
                      onClick={() => navigate(value)}
                    >
                      <Typography color="black" fontWeight="600">
                        {label}
                      </Typography>
                    </Button>
                  )}

                  {subMenus && (
                    <Menu
                      sx={{ borderRadius: "8px" }}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
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
                      {subMenus.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => navigate(subItem.value)}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}

{subSettinngs && (
                    <Menu
                      sx={{ borderRadius: "8px" }}
                      anchorEl={settingMenuAnchor}
                      open={Boolean(settingMenuAnchor)}
                      onClose={handleSettingMenuClose}
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
                      {subSettinngs.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => navigate(subItem.value)}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <FormatText>RS10169</FormatText>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
