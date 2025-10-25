import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ContactCRM from "./components/ContactCRM";

function HomePage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <IntroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/contacts" element={<ContactCRM />} />
      </Routes>
    </Router>
  );
}

export default App;
