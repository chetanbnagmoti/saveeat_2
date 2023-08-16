import React from "react";
import ModalComp from "../../Modal/ModalComponent";

const UpdateCategoryModal = ({ open, setOpen }) => {
  return (
    <>
      <ModalComp
        open={open}
        setOpen={setOpen}
        title={"Update Category"}
      ></ModalComp>
    </>
  );
};

export default UpdateCategoryModal;
