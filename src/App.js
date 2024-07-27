import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App bg-sky-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
      
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
