import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Homepage } from "./Pages/Homepage";

const theme = createTheme({
  typography: {
    fontFamily: "gilroy",
    button: {
      fontWeight: "bold",
    },
    p: {
      fontWeight: "bold",
    },
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
    body1: {
      fontWeight: "bold",
    },
    body2: {
      fontWeight: "bold",
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
