// components
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Other from "./components/Other";
const theme = createTheme();
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <About />
        <Other />
      </ThemeProvider>
    </div>
  );
}

export default App;
