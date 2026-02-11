import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import AboutLead from './components/AboutLead';
import ServicesGrid from './components/ServicesGrid';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar />
      <HeroSection />
      <Expertise />
      <AboutLead />
      <ServicesGrid />
      <Process />
      <Footer />
    </>
  );
}

export default App;
