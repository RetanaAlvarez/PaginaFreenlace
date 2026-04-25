import Navbar from "../../components/Navbar/Navbar";

import About from "../About/Aboutme.jsx";

import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects.jsx";
import Plan from "../Plan/Plan.jsx";
import RealProject from "../RealProjects/RealProjects.jsx";



const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <RealProject />
        <About />
        <Plan />
      </main>
    </>
  )
};

export default Home