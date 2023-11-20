import Box from "@mui/material/Box";
import TimeCount from "./TimeCount";
import Content from "./Content";
import Snowfall from "react-snowfall";

const Welcome = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#fff0f0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "space-around",
        textAlign: "center",
        height: "inherit",
        background:
          "linear-gradient( to right bottom, #d96459 50%, #c04e43 50%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom",
        backgroundColor: "#fffaf4",
      }}
    >
      <Snowfall style={{ zIndex: 1 }} />
      <img
        src="/images/moon.png"
        style={{
          width: "300px",
          position: "absolute",
          top: "8rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <img
        src="/images/ice.png"
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Content />
    </Box>
  );
};

export default Welcome;
