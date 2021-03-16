import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Projects />
    </div>
  );
}

export default App;
