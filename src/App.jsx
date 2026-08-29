import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PROJECT DETAILS */}
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;