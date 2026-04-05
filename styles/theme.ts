import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5", // Clothing LAB blue
    },
    secondary: {
      main: "#fbc02d", // accent yellow
    },
    error: {
      main: "#e53935", // red for delete
    },
    success: {
      main: "#43a047", // green for success
    },
    background: {
      default: "#f9f9f9", // clean light background
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontWeight: 600 },
    button: { textTransform: "none" }, // no ALL CAPS
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "6px 16px",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          backgroundColor: "#fff",
        },
      },
    },
  },
});

export default theme;
