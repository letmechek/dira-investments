import Hero from "./components/Hero/Hero";
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
    </>
  );
}

export default App;
