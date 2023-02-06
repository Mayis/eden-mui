import React, { useState } from "react";

// components
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Other from "../components/Other";
import Api from "../api";

function Main() {
  const { data, loading } = Api.useApi(() => Api.services.GetServices(), []);

  console.log(data);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Other />
    </>
  );
}

export default Main;
