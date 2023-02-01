// components
import { ThemeProvider, createTheme } from "@mui/material";
import Main from "./pages/Main";

// routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import MemberPage from "./pages/MemberPage";
import GallaryPage from "./pages/GallaryPage";

const theme = createTheme();
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<ServicesPage />}>
              <Route path="/services:serviceId" element={<ServicesPage />} />
            </Route>
            <Route path="/member" element={<MemberPage />}>
              <Route path="/member:memberId" element={<MemberPage />} />
            </Route>
            <Route path="/gallery" element={<GallaryPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
