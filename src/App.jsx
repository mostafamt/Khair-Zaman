import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import Rtl from "./components/Rtl/Rtl";
import Appbar from "./components/Appbar/Appbar";
import OrderConfirm from "./pages/OrderConfirm/OrderConfirm";
import Thanking from "./pages/Thanking/Thanking";
import Test from "./pages/Test/Test";

function App() {
  return (
    <Rtl>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-confirmation" element={<OrderConfirm />} />
          <Route path="/thank-you" element={<Thanking />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Rtl>
  );
}

export default App;
