import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import Rtl from "./components/Rtl/Rtl";
import Appbar from "./components/Appbar/Appbar";

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
