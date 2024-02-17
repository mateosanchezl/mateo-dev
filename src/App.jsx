import Landing from "./pages/Landing";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="bg-slate-800">
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
      </div>
    </>
  );
}

export default App;
