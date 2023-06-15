import Hero from "./components/Hero/Hero";
import Invite from "./components/Invite/Invite";
import JoinUs from "./components/JoinUs/JoinUs";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <JoinUs/>
      <Testimonials/>
      <Invite />
      <Location />
    </>
  );
}

export default App;
