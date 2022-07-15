import logo from "./logo.svg";
import "./App.css";
import List from "./Components/List/List.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./shared/Card/Card";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div>
            <ol>
              <li>Home</li>
              <li>
                <Link to="/link">Link</Link>
              </li>
              <li>Card</li>
            </ol>
          </div>
          <img src={logo} alt="" className="App-logo" />
          {/* <List /> */}
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/link" element={<List />}></Route>
          <Route exact path="/card" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
