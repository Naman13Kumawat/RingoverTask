import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ page }) {
  const handleClick = (e) => {
    console.log("Cliked", e.target.tagName);
    e.target.classList.add("active");
  };

  return (
    <div className="navbar">
      <img className="logo" src="/images/logoB.png" alt="logo" />
      <ul>
        <Link to="">
          <li onClick={handleClick}>
            HOME<div className={`line ${page === "home" ? "active" : null}`}></div>
          </li>
        </Link>
        <Link to="/journey">
          <li onClick={handleClick}>
            THE JOURNEY<div className={`line ${page === "journey" ? "active" : null}`}></div>
          </li>
        </Link>

        <Link to="/team">
          <li onClick={handleClick}>
            TEAM<div className={`line ${page === "team" ? "active" : null}`}></div>
          </li>
        </Link>

        <Link to="/">
          <li onClick={handleClick}>
            STORE
            <div className={`line ${page === "store" ? "active" : null}`}></div>
          </li>
        </Link>

        <Link to="/contact">
          <li onClick={handleClick}>
            CONTACT<div className={`line ${page === "contact" ? "active" : null}`}></div>
          </li>
        </Link>
      </ul>
      <span className="profileDiv">
        <img className="profile" src="/images/profile.png" alt="profile" />
        <h1>GAGAN</h1>
      </span>
    </div>
  );
}
