import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Game } from "./pages/game.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
