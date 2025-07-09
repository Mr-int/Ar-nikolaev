import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Monuments from "./components/Monuments";
import Nikolaev from "./components/Nikolaev";
import Gagarin from "./components/Gagarin";
import Turing from "./components/Turing";
import Redirect from "./components/Redirect";
import Quest from "./components/Quest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/nikolaev" element={<Nikolaev />} />
        <Route path="/gagarin" element={<Gagarin />} />
        <Route path="/turing" element={<Turing />} />
        <Route path="/quest" element={<Quest />} />
        <Route path=":name" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
