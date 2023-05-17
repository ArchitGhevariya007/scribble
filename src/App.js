import "./App.css";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Mobile from "./components/Mobile";
import MainCotainer from "./components/MainContainer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    color: "rgb(232, 232, 232)",
  },
  palette: {
    primary: {
      main: "#4b89dd",
    },
    secondary: {
      main: "#e8e8e8",
    },
  },
});

function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
    {/* If screen size is small then it will call Mobile component */}
      {isMobile ? (
        <Mobile />
      ) : (
        <ThemeProvider theme={theme}>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          <MainCotainer></MainCotainer>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
