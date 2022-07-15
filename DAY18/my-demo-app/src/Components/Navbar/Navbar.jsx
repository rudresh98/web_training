import navstyle from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={navstyle.navBar}>
        <ol className={navstyle.customOl}>
          <li>Home</li>
          <li>List</li>
          <li>Card</li>
        </ol>
      </div>
    </>
  );
}

export default Navbar;
