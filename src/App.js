import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pricelist from "./components/Pricelist";
import Gallery from "./components/Gallery";
import Scheduling from "./components/Scheduling";
import Location from "./components/Location";
import About from "./components/About";
import Navbar from "./components/Navbar";

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
