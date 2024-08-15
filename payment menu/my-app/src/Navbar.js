import React from "react";
// import logo from "./images/logo.svg";
// import logo from './images/Stripe_logo.png'
import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} className="nav-logo" alt="coding" /> */}
          <h1 className="nav-logo">stripe</h1>
          <button className="btn toggle-btn" onClick={openSideBar}>
          <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn singin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
