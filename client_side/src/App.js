import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPages/Home/Home";
import Navigation from "./Components/DisplayWork/Naviagation/Navigation";
function App() {
  return (
    <BrowserRouter>
    <Navigation />  {/* here for show in every pages */} 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
