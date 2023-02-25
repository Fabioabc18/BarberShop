import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Pricelist from "./components/Pricelist";
import Gallery from "./components/Gallery";
import Scheduling from "./components/Scheduling";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
