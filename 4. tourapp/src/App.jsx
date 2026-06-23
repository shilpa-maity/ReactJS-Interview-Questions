import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import TourPackages from "./components/TourPackages";
import './App.css';


function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tour Website</h1>
      <Home />
      <About />
      <TourPackages />


      {/* <section className="top">
        <Home />
      </section>

      <section>
        <About />
      </section>

      <section>
        <TourPackages />
      </section> */}
    </div>
  );
}


export default App;
