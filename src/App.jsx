import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Footer from "./components/footer";

function App() {

  return (
    <Router>
        {}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        {}
        <Footer />
        {}
    </Router>
  );
}

export default App
