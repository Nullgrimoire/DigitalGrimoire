import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(hash.lastIndexOf("#") + 1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero" className="pt-20">
                <Hero />
              </section>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
