import React from "react";
import BrandPanelLayout from "../../components/Layouts/BrandPanelLayout";
import { Box } from "@mui/material";
import ItemTable from "../../components/ItemsList/ItemsTable";
import TopSection from "../../components/ItemsList/TopSection";

const ItemsPage = () => {
  return (
    <>
      <BrandPanelLayout>
        <Box>
          <TopSection />
          <Box>
            <ItemTable />
          </Box>
        </Box>
      </BrandPanelLayout>
    </>
  );
};

export default ItemsPage;
