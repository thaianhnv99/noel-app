import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TimeCount from "./TimeCount";

const Content = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="500">
        Join Us For A Christmas Party
      </Typography>
      <Typography marginTop="1rem">
        Wishing you and your family all the best things and timeless treasures
        on this lovely holiday! Share your endless love and kindness with your
        nearest and dearest.
      </Typography>
      <TimeCount />
    </Box>
  );
};

export default Content;
