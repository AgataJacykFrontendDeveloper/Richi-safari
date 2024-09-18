import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./HomePage";
import Info from "./Info";
import Offer from "./Offer";
import Regulations from "./Regulations";
import Contact from "./Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/przed-wyjazdem" element={<Info />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/regulamin" element={<Regulations />} />
          <Route path="/kontakt" element={<Contact />} />
          {/* Must be always last route */}
          <Route path="*" element={<>404 page not found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
