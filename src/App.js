import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Invite from "./components/Invite/Invite";
import JoinUs from "./components/JoinUs/JoinUs";
import Location from "./components/Location/Location";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Subscribe from "./components/Subscribe/Subscribe";
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
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
