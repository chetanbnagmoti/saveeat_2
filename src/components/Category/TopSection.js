import React,{useState} from "react";
import { Box, Button } from "@mui/material";
import NewCategoryModal from "./Modal/NewCategoryModal";
import UpdateCategoryModal from "./Modal/UpdateCategoryModal";


const TopSection = () => {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  
  return (
    <>
      <Box
        sx={{
          height: 50,
          display: "flex",
          alignItems: "center",
          position: "static",
          top: "0px",
          bottom: "0px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
            onClick={() => setUpdateCategoryModal(true)}
          >
            Update Menu Category
          </Button>

          <Button
            variant="contained"
            sx={{
              marginLeft: "9px",
              "&": {
                backgroundColor: "#96D780",
              },
              "&:hover": {
                backgroundColor: "#96D780",
              },
            }}
            disableElevation
            onClick={() => setCreateCategoryModal(true)}
          >
            Create Menu Category
          </Button>
        </Box>
      </Box>

      <NewCategoryModal open={createCategoryModal} setOpen={setCreateCategoryModal} />
      <UpdateCategoryModal open={updateCategoryModal} setOpen={setUpdateCategoryModal} />
    </>
  );
};

export default TopSection;
