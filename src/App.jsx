import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";
import Rtl from "./components/Rtl/Rtl";
import Appbar from "./components/Appbar/Appbar";
import OrderConfirm from "./pages/OrderConfirm/OrderConfirm";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import Thanking from "./pages/Thanking/Thanking";

function App() {
  return (
    <Rtl>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-confirmation" element={<OrderConfirm />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/thank-you" element={<Thanking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Rtl>
  );
}

export default App;
