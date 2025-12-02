import { BrowserRouter, Routes, Route, Link } from "react-router";
import URLShrinker from "./URLShrinker";
import About from "./About";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About us
          </Link>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<URLShrinker />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
