import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const totalDocScrollLength = docHeight;
      const scrollPosition = Math.floor(
        (scrollTop / totalDocScrollLength) * 100
      );

      setScrollProgress(scrollPosition);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      <div className="bg-slate-800 relative">
        <div id="landing">
          <Landing />
        </div>
        <div id="about" className="h-screen">
          <About />
        </div>
        <div id="portfolio" className="h-screen">
          <Portfolio />
        </div>
        <div id="contact" className="h-screen">
          <Contact />
        </div>

        <div className="fixed right-0 top-0 z-50 h-full">
          <div
            style={{ height: `${scrollProgress}%` }}
            className="bg-slate-200 w-3"
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
