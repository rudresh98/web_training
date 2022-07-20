import { Link } from "react-router-dom";
import navstyle from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={navstyle.navBar}>
        <ol className={navstyle.customOl}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lists">List</Link>
          </li>
          <li>
            <Link to="/cards">Card</Link>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Navbar;
