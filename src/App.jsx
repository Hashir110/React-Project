import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import My_Expertice from "./components/my_expertice";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

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
