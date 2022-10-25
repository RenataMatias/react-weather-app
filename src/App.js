import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Edinburgh" />
        <footer className="text-center">
          <small>
            This projec was coded by{" "}
            <a
              href="https://www.linkedin.com/in/rematias/"
              target="_blank"
              rel="noreferrer"
            >
              Renata Matias
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/RenataMatias/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
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
          </small>
        </footer>
      </div>
    </div>
  );
}
