import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Store from "./Pages/Apes/Store";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
