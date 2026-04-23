import Hero from "../Hero/Hero";

import Navbar from "../../components/layout/Navbar/Navbar";
import Projects from "../Projects/Projects.jsx";
import RealProject from "../RealProjects/RealProjects.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <RealProject />

      </main>
    </>
  )
};

export default Home