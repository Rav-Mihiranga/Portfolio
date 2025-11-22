import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Services from "./components/Services/services";
import MyWork from "./components/MyWork/mywork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  return (
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
        
      </div>
    
  );
}

export default App
