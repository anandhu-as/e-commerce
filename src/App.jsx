import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Store from "./Pages/Apes/Store";
import Cart from "./Pages/Cart/Cart";
import Notification from "./Pages/Notifications/Notification";
import About from "./Pages/About/About";

const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes> {/* Routes... */}
        <Route path="/" element={<Banner />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
