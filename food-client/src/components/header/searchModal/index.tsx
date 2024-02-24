import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { searchContext } from "@/context/searchProvider";
import SearchAppBar from "./SearchInput";
import ResultFoodCard from "./ResultFood";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "400px" },
  height: { xs: "100%", sm: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function SearchModal() {
  //   const [openSeachModal, setOpenSeachModal] = React.useState(false);
  //   const handleOpen = () => setOpenSeachModal(true);
  //   const handleClose = () => setOpenSeachModal(false);
  const { openSeachModal, handleSearchOpen, handleSearchClose } =
    React.useContext(searchContext);
  return (
    <div>
      <Modal open={openSeachModal} onClose={handleSearchClose}>
        <Box sx={style}>
          <SearchAppBar />
          <ResultFoodCard />
        </Box>
      </Modal>
    </div>
  );
}
