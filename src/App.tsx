import { Routes, Route, Navigate } from "react-router-dom";
// Page
import Home from "./pages/Home";
// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
// Error
import Error404 from "./pages/Error404";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/layoutAdmin' />} />
      <Route path="layoutAdmin" element={<LayoutAdmin />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Error404 />} />         
    </Routes>
  )
}
export default App
