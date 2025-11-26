import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experiences from "@/sections/Experiences";
import Testimonial from "@/sections/Testimonial";
import Contact from "@/sections/Contact";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
