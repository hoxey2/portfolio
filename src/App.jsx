import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./UI/Layout/Layout";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skiils";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <AboutMe />
        <Skills />
      </Layout>
    </div>
  );
}
export default App;
