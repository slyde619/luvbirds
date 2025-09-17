import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LoveStory from "./components/LoveStory";
import NavBar from "./components/Navbar";
import RSVP from "./components/RSVP";


function App() {
  return (
    <div className="antialiased bg-[#FDF7F9] text-slate-800 selection:bg-rose-100 selection:text-slate-900 font-inter">
      <NavBar />
      <Hero />
      <Countdown />
      <main>
        <LoveStory />
        <Gallery />
        <EventDetails />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;