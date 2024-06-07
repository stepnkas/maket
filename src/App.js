import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlavSkrin from "./components/GlavSkrin";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<GlavSkrin/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
