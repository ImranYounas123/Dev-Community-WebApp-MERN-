import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPages/Home/Home";
import Navigation from "./Components/DisplayWork/Naviagation/Navigation";
import Registration from "./Components/MainPages/Registration/Registration"
import Login from "./Components/MainPages/Login/Login";
function App() {
  return (
    <BrowserRouter>
    <Navigation />  {/* here for show in every pages */} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
