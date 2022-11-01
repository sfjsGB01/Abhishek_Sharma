import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from './Store';
import Item from './Item';

function Home() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Store />} />

          <Route path="/item/:id/*" element={<Item />} />
        </Routes>
      </main>

    </div>
  )
}

export default Home