import Navbar from "../../components/Navbar/Navbar";

import About from "../About/Aboutme.jsx";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects.jsx";
import Plan from "../Plan/Plan.jsx";
import RealProject from "../RealProjects/RealProjects.jsx";
import PerformanceOptions from "../PerformanceOptions/PerformanceOptions.jsx";
import QuizSection from "../Quiz/QuizSection/QuizSection.jsx";
import Contacto from "../Contacto/Contacto.jsx";
import Footer from "../../components/Footer/Footer.jsx";



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
        <PerformanceOptions/>
        <QuizSection/>
        <Contacto/>
      </main>
      <Footer/>
    </>
  )
};

export default Home