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
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Typography>
        Cảm ơn bạn đã ghé thăm, chúc bạn một mùa giáng sinh vui vẻ
      </Typography>
      <TimeCount />
    </Box>
  );
};

export default Content;
