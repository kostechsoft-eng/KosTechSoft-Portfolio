import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import CADProjectDetails from "./pages/CADProjectDetails";
import AutoCADProjectDetails from "./pages/AutoCADProjectDetails";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Web Projects */}
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />

          {/* SolidWorks / CAD */}
          <Route
            path="/projects/cad/:projectId"
            element={<CADProjectDetails />}
          />

          {/* AutoCAD */}
          <Route
            path="/projects/cad/autocad/:projectId"
            element={<AutoCADProjectDetails />}
          />

          {/* Products */}
          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />

          {/* Legal */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;