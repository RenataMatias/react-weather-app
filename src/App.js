import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h1>Weather App</h1> */}
        <Search defaultCity="Lisbon" />
        <footer>
          This projec was coded by
          <a
            href="https://www.linkedin.com/in/rematias/"
            target="_blank"
            rel="noreferrer"
          >
            Renata Matias{" "}
          </a>{" "}
          and is
          <a
            href="https://github.com/RenataMatias/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dynamic-alfajores-4e8072.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
