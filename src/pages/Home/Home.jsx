import Navbar from "../../components/layout/Navbar/Navbar";

import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects.jsx";
import RealProject from "../RealProjects/RealProjects.jsx";

import About from "../About/Aboutme.jsx";


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <RealProject />
        <About/>
      </main>
    </>
  )
};

export default Home