import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainCotainer from "./components/MainContainer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    color:"rgb(232, 232, 232)"
  },
  palette: {
    primary: {
      main: '#4b89dd',
    },
    secondary: {
      main: '#e8e8e8', 
    },
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <MainCotainer></MainCotainer>
      </ThemeProvider>
    </>
  );
}

export default App;
