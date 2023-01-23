// components
import { ThemeProvider, createTheme } from "@mui/material";
import Main from "./pages/Main";

// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/ServicesPage";

const theme = createTheme();
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Services />}>
              <Route path="/services:serviceId" element={<Services />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
