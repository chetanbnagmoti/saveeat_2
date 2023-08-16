import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import AddNewItemModal from "./Modals/AddNewItemModal";
import AddBulkItemModal from "./Modals/AddBulkItemModal";

const TopSection = () => {
  const [addNewItemModalOpen, setaddNewItemModalOpen] = useState(false);
  const [addBulkItemModalOpen, setaddBulkItemModalOpen] = useState(false);

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
            onClick={() => setaddBulkItemModalOpen(true)}
          >
            Bulk Add Items
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
            onClick={() => setaddNewItemModalOpen(true)}
          >
            Add Item
          </Button>
        </div>
      </Box>

      <AddNewItemModal
        addNewItemModalOpen={addNewItemModalOpen}
        setaddNewItemModalOpen={setaddNewItemModalOpen}
      />

      <AddBulkItemModal
        addBulkItemModalOpen={addBulkItemModalOpen}
        setaddBulkItemModalOpen={setaddBulkItemModalOpen}
      />
    </>
  );
};

export default TopSection;
