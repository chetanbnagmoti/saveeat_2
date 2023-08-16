import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import NewMenuModal from "./Modal/NewMenuModal";

const TopSection = () => {
  const [newMenuModalOpen, setNewMenuModalOpen] = useState(false);

  return (
    <>
      <Box>
        <div
          style={{ float: "right", marginTop: "1rem", marginBottom: "0.5rem" }}
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
            // onClick={() => setDiscountModalOpen(true)}
          >
            Add To Discount
          </Button>

          <Button
            sx={{
              marginLeft: "9px",
              "&": {
                backgroundColor: "#96D780",
              },
              "&:hover": {
                backgroundColor: "#96D780",
              },
            }}
            variant="contained"
            disableElevation
            onClick={() => setNewMenuModalOpen(true)}
          >
            Add New Menu
          </Button>
        </div>
      </Box>

      <NewMenuModal open={newMenuModalOpen} setOpen={setNewMenuModalOpen} />
    </>
  );
};

export default TopSection;
