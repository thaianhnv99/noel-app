import Box from "@mui/material/Box";
import TimeCount from "./TimeCount";
import Content from "./Content";

const Welcome = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#fff0f0",
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'space-around',
        textAlign: 'center',
        height: 'inherit'
      }}
    >
      <TimeCount />
      <Content/>
    </Box>
  );
};

export default Welcome;
