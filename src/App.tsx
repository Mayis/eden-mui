import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Other from "./components/Other";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Other />
    </div>
  );
}

export default App;
