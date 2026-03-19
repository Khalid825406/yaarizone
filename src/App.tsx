import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonial';
import { DownloadBar } from './components/sections/Downloadbar';
import RealFrndInfo from './components/sections/RealFrndInfo';

function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Particle Background */}
     

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Testimonials />
        <RealFrndInfo/>
      </main>

      {/* Footer */}
      <Footer />

      {/* ✅ Sirf homepage pe show hoga */}
      <DownloadBar />
    </div>
  );
}

export default App;