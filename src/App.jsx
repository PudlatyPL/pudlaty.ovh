import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Project from "./pages/Project";

import NotFound from "./pages/NotFound";
import Footer from "./components/footer";

import 'aos/dist/aos.css';

function App() {

  return (
    <Router>
        {}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        {}
        <Footer />
        {}
    </Router>
  );
}

export default App
