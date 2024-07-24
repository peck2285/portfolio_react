/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:06:33
*/
import React, { FC, useEffect, Fragment } from "react";
// import Loading from '../Loading/Loading';
import "./Home.css";
import Skills from "../../components/Skills/Skills";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Portofolio from "../../components/Portofolio/Portofolio";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Contact from "../../components/Contact/Contact";
import { FaGithub } from "react-icons/fa";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  // const [state, setState] = useState<any>(null)

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {};
    runLocalData();
  }, []);

  return (
    <Fragment>
      <div className="Home  ">
        <Header />
        <Slider />
        <About />

        <Skills />

        <Portofolio />

        <Contact />

        <a
          href="https://wa.me/qr/7FHMKQL3LMG2C1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="assets/images/Icon (1).png" className="whtFixed" alt="" />
        </a>

        <a
          href="https://github.com/peck2285"
          className="tag"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="gitubFixed" />
        </a>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
