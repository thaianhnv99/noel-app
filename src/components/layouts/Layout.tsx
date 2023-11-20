import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

const Layouts = () => {
  const layoutStyles: SxProps = {
    backgroundColor: "white",
    height: "inherit",
    width: "inherit",
  };
  return (
    <Box sx={layoutStyles}>
      <Outlet />
    </Box>
  );
};

export default Layouts;
