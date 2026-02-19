import { Routes, Route, Navigate } from "react-router-dom";
// Page
import HomePage from "./pages/HomePage";
// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
// Error
import Error404 from "./pages/Error404";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navigate to='/layoutAdmin' />} />
      <Route path="layoutAdmin" element={<LayoutAdmin />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Error404 />} />         
    </Routes>
  )
}
export default App
