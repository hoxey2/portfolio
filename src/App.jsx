import "./App.scss";
import Header from "./Components/Header/Header";
import Layout from "./UI/Layout/Layout";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/MyProjects/MyProjects";
import Footer from "./Components/Footer/Footer";
import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

function App() {
  const [isExploding, setIsExploding] = React.useState(false);
  const [isScrollend, setIsscrollend] = React.useState(false);
  let scroll = window.addEventListener("scroll", () => {
    console.log(window.scrollX, window.scrollY);
    if (scrollY == 3840) {
      setIsscrollend(true);
    }
  });
  return (
    <div className="App" onScroll={scroll}>
      {isExploding && <ConfettiExplosion />}
      <Header />
      <Layout>
        <AboutMe />
        <Skills />
        <MyProjects />
      </Layout>
      <Footer isScrollend={isScrollend} isExploding={isScrollend} />
    </div>
  );
}
export default App;
