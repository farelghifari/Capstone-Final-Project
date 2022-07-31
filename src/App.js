import "./App.css";
import Weather from "./Weather";
import Home from "./components/Home";
import Navbar from "./components/Navbar/index";
import Contact from "./components/Contact";
import About from "./components/About/index";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Weather/>
      <Contact/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
