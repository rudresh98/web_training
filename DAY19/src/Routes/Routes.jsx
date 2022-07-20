import { Routes, Route, Redirect } from "react-router-dom";
import Home from "../Components/Home/Home";
import List from "../Components/List/List";
import Card from "../shared/Card/Card";
import NoRoute from "../Components/404/NoRoute";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/lists" element={<List />}></Route>
        <Route exact path="/cards" element={<Card />}></Route>
        <Route exact path="*" element={<NoRoute />}></Route>
        <Route exact path="*/*" element={<NoRoute />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
