import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home: React.FC = () => {
  return <h1>Home Page</h1>;
};

const About: React.FC = () => {
  return <h1>About Page</h1>;
};

const App: React.FC = () => {
  return (
    <Router basename="/Landing-page-dashboard">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
