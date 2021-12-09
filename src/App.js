import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
     </header>
     <main>
       <Dictionary defaultKeyword="sunset" />
       </main>
     <footer className="App-footer">
       <small>This project was coded by Maria Garcia {""}
         <a href="https://github.com/mariasalud/dictionary" target="_blank" rel="noreferrer"> 
         Open-Source on GitHub
          </a> {""}
          and on {""}
         <a href="https://festive-wilson-191d91.netlify.app" target="_blank" rel="noreferrer">
          Netlify
          </a>
        </small>
     </footer>
     </div>
     </div>
  );
}


