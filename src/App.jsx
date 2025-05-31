import { BrowserRouter, Routes,Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Home />
       <Skills />
       <Projects />
       <About />
       <Contact />
       
      <Routes>
        
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
      </BrowserRouter>
     
    </div>
    
  )
}
export default App;