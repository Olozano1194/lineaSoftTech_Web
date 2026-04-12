import { Routes, Route } from "react-router-dom";
// Page
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// Legal Pages
import TermsPage from "./pages/legal/TermsPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
import CookiesPage from "./pages/legal/CookiesPage";
// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
// Error
import Error404 from "./pages/Error404";

function App() { 
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="terminos" element={<TermsPage />} />
        <Route path="privacidad" element={<PrivacyPage />} />
        <Route path="cookies" element={<CookiesPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />         
    </Routes>
  )
}
export default App;