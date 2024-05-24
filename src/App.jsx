import "./App.scss";
import Header from "./Components/Header/Header";
import Layout from "./UI/Layout/Layout";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/MyProjects/MyProjects";
import Footer from "./Components/Footer/Footer";
import React from "react";
import Guide from "./Components/Guide/Guide";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Guide />
        <AboutMe />
        <Skills />
        <MyProjects />
      </Layout>
      <Footer />
    </div>
  );
}
export default App;
