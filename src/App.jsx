import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

//Redux Store
import store from "./redux/store";

//Components
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import ResturantPage from "./components/ResturantPage";
import ResturantInformation from "./components/ResturantInformation";
import Cart from "./components/Cart";
import SelectedResturants from "./components/shared/SearchedResturants";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resturant/:id" element={<ResturantPage />} />
        <Route path="/resturantinfo/:id" element={<ResturantInformation />} />
        <Route path="/selectedResturants" element={<SelectedResturants />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Provider>
  );
}

export default App;
