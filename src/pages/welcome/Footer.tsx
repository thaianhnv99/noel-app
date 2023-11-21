import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChristmasBell from "../../icons/ChristmasBell";

const Footer = () => {
  return (
    <Box
      sx={{
        margin: "1rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: ".5rem",
      }}
    >
      <Typography>
        Cảm ơn bạn đã ghé thăm, chúc bạn một mùa giáng sinh vui vẻ
      </Typography>
      <ChristmasBell className="message-footer" />
    </Box>
  );
};

export default Footer;
