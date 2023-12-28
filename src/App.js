import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Company from "./routes/Company";
import Resources from "./routes/Resources";
import About from "./routes/About";
import Contacts from "./routes/Contacts";


 function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App