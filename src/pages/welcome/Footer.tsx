import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        margin: "1rem",
        width: "100%",
      }}
    >
      <Typography>
        Cảm ơn bạn đã ghé thăm, chúc bạn một mùa giáng sinh vui vẻ
      </Typography>
    </Box>
  );
};

export default Footer;
