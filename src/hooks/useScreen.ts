import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "./useTheme";

const useScreen = () => {
  const { theme } = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return { isDesktop };
};

export default useScreen;
