import React from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const BrandPanelLayout = ({ children }) => {
  return (
    <>
      <Box>
        <Header />
        <Box
          sx={{
            width: "90%",
            marginTop: "5rem",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default BrandPanelLayout;
