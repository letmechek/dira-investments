import Hero from "./components/Hero/Hero";
import Invite from "./components/Invite/Invite";
import JoinUs from "./components/JoinUs/JoinUs";
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
    </>
  );
}

export default App;
