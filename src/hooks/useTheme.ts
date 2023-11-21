import { useTheme as useMuiTheme } from "@mui/material/styles";
const useTheme = () => {
  const theme = useMuiTheme();
  return { theme };
};

export default useTheme;
