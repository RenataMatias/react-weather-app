// import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <p>
        <a
          href="https://github.com/RenataMatias/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/rematias/"
          target="_blank"
          rel="noreferrer"
        >
          Renata Matias{" "}
        </a>
      </p>
    </div>
  );
}

export default App;
