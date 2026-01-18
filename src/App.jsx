import Hero from "./components/hero";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="page">
      <Hero />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
