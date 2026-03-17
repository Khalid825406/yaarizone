import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { ParticlesBackground } from './components/ui-custom/ParticlesBackground';
import { Testimonials } from './components/sections/Testimonial';

function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Particle Background */}
      <ParticlesBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Testimonials/>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
