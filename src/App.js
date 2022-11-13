import NavBar from "./components/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Careers from "./pages/careers/Careers";
import Events from "./pages/events/Events";
import Products from "./pages/products/Products";
import Support from "./pages/support/Support";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
