import "./App.scss";
import Header from "./Components/Header/Header";
import Layout from "./UI/Layout/Layout";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/MyProjects/MyProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <AboutMe />
        <Skills />
        <MyProjects />
      </Layout>
    </div>
  );
}
export default App;
