import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar";
import AboutProject from "./pages/AboutProject";

function App() {

  return (
    <Router>
        {}
          <Navbar />
          <div className="md:w-[calc(100vw - 8rem)] md:ml-[8rem]">
            {}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:codeName" element={<AboutProject />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            {}
          </div>
        {}
    </Router>
  );
}

export default App
