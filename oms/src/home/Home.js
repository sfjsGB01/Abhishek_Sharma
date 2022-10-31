import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Store from "./store/Store";
import Item from "./item/Item";

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Store />} />

          <Route path="/item" element={<Item />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
