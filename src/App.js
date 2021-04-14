import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
