import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Approccio from "./Pages/Approccio";
import ChiSono from "./Pages/ChiSono";

function App() {
  return (
    <div className="App bg-neutral-50">
 
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/approccio" element={<Approccio />} />
          <Route path="/chi-sono" element={<ChiSono />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

