import React from "react";
// import Carousal from "./components/Carousal";
import Navbar from "./components/Navbar";
import SelfDefence from "./components/SelfDefence";
import LandingPage from "./components/LandingPage";
import Education from "./components/Education";
import NGO from "./components/NGO";
import OurTeams from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Carousal /> */}
      <LandingPage />
      <SelfDefence />
      <Education />
      <NGO />
      <OurTeams />
      <Footer />
    </div>
  );
};

export default App;
