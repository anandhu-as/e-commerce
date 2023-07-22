import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
    <Route path="/" element={<Banner/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
