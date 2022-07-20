import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
