import { Routes, Route } from "react-router-dom";
// Page
import Home from "./pages/Home";
import Navbar from "./components/layout/Nanbar";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>         
      <Route path="/navbar" element={<Navbar />}></Route>         
    </Routes>
  )
}
export default App
