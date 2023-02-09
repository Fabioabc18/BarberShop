import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Pricelist from "./components/Pricelist";
import Scheduling from "./components/Scheduling";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Pricelist />
      <Gallery />
      <Scheduling />
      <Location />
      <About />
    </BrowserRouter>
  );
}

export default App;
