import { useState, useEffect } from "react"; // Ensure useEffect is imported
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import My_Expertice from "./components/my_expertice";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    try {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: false, // Whether animation should happen only once
      });
    } catch (error) {
      console.error("AOS initialization error: ", error); // Catch any potential AOS errors
    }
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <My_Expertice />
      <Footer />
    </>
  );
}

export default App;
