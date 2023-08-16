import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import CategoryTableComp from "../../components/Category/CategoryTableComp";
import TopSection from "../../components/Category/TopSection";
import { Box } from "@mui/material";

const CategoryPage = () => {
  return (
    <BrandPanelLayout>
      <Box height="100vh">
        <TopSection />
        <CategoryTableComp />
      </Box>
      
    </BrandPanelLayout>
  );
};

export default CategoryPage;
