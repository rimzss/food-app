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
  width: { xs: "100%", sm: "580px" },
  height: { xs: "100%", sm: "80%" },
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function SearchModal() {
  //   const [openSeachModal, setOpenSeachModal] = React.useState(false);
  //   const handleOpen = () => setOpenSeachModal(true);
  //   const handleClose = () => setOpenSeachModal(false);
  const { openSeachModal, handleSearchOpen, handleSearchClose, resultFoods } =
    React.useContext(searchContext);
  return (
    <div>
      <Modal open={openSeachModal} onClose={handleSearchClose}>
        <Box sx={style} className="overflow-scroll">
          <SearchAppBar />
          <div className="p-3">
            {resultFoods?.map((result: any) => (
              <ResultFoodCard
                image={result.image}
                name={result.name}
                price={result.price}
                food={result}
                handleSearchClose={handleSearchClose}
              />
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
