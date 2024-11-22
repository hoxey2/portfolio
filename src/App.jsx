import "./App.scss";
import Header from "./components/Header/page";
import Layout from "./UI/Layout/Layout";
import AboutMe from "./components/AboutMe/page";
import Skills from "./components/Skills/page";
import MyProjects from "./components/MyProjects/page";
import Footer from "./components/Footer/page";
import React from "react";
import Guide from "./components/Guide/page";

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
