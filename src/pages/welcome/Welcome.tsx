import Box from "@mui/material/Box";
import Content from "./Content";
import Snowfall from "react-snowfall";
import Footer from "./Footer";

const Welcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
        width: "calc(100% - 200px)",
        height: "inherit",
        margin: "auto",
        // background:
        //   "linear-gradient( to right bottom, #d96459 50%, #c04e43 50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
        // backgroundColor: "#fffaf4",
      }}
    >
      <Snowfall style={{ zIndex: 1 }} />
      {/* <Content /> */}
      <img src="/images/banner.png" />
      <Content />
      <Footer />
    </Box>
  );
};

export default Welcome;
