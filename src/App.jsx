import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import features from "./components/features";
import testimonials from "./components/testimonials";
import pricing from "./components/pricing";
import footer from "./components/Footer";

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-green-950 text-white overflow-hidden ">
    <Navbar/>
    
    <Hero/>

    <features/>

    <testimonials/>

    <pricing/>
    
    <footer/>
    
    </div>
    </>
  )
}

export default App
