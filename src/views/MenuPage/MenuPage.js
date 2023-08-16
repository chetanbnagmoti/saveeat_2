import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import { Box } from "@mui/material";
import TopSection from "../../components/MenuList/TopSection";
import MenuComp from "../../components/MenuList/MenuComp";

const MenuPage = () => {
  return (
    <>
      <BrandPanelLayout>
        <Box>
          <TopSection />
        </Box>

        <Box>
          <MenuComp />
        </Box>
      </BrandPanelLayout>
    </>
  );
};

export default MenuPage;
