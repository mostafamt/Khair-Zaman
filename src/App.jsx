import { BrowserRouter, Routes, Route } from "react-router";
import Appbar from "./components/AppBar/AppBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import Rtl from "./components/Rtl/Rtl";

function App() {
  return (
    <Rtl>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Rtl>
  );
}

export default App;
