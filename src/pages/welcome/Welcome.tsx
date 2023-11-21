import Box from "@mui/material/Box";
import Content from "./Content";
import Snowfall from "react-snowfall";
import Footer from "./Footer";
import useScreen from "../../hooks/useScreen";

const Welcome = () => {
  const { isDesktop } = useScreen();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        textAlign: "center",
        height: "inherit",
        // background:
        //   "linear-gradient( to right bottom, #d96459 50%, #c04e43 50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
        backgroundColor: "#fffaf4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          margin: "auto",
          flexDirection: isDesktop ? "row" : "column",
          width: "calc(100% - 200px)",
        }}
      >
        <Snowfall style={{ zIndex: 1 }} />
        <img
          src="/images/banner.png"
          style={{
            width: "100%",
            maxWidth: "600px",
          }}
        />
        <Content />
      </Box>
      <Footer />
    </Box>
  );
};

export default Welcome;
