import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home: React.FC = () => {
  return <h3>Home Page</h3>;
};

const About: React.FC = () => {
  return <h3>About Page</h3>;
};

const PageNotFound: React.FC = () => {
  return <h3>Error:( Page not Found</h3>;
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
