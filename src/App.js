import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        {/* <h1>Weather App</h1> */}
        <Search defaultCity="Recife" />
        <footer>
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
        </footer>
      </div>
    </div>
  );
}
