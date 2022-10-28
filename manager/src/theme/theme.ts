import orange from "@mui/material/colors/orange";
import createTheme from "@mui/material/styles/createTheme";

import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
