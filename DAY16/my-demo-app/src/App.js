import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List/List.jsx";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="" srcset="" className="App-logo" />
      <List />
    </div>
  );
}

export default App;
