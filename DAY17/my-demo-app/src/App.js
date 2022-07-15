import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List/List.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <img src={logo} alt="" srcset="" className="App-logo" />
        <List />
      </div>
    </>
  );
}

export default App;
