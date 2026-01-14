import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__grid">
        {/* left side */}
        <NavLink to="/" className="navbar__brand" aria-label="Go to home">
          <span className="navbar__brandIcon" aria-hidden="true">🍴</span>
          <span className="navbar__brandText">FlavorFeed</span>
        </NavLink>

        {/* search bar */}
        <div className="navbar__center">
          <div className="navbar__searchWrap">
            <span className="navbar__searchIcon" aria-hidden="true">🔍</span>
            <input
              className="navbar__searchInput"
              type="text"
              placeholder="Search restaurants..."
            />
          </div>
        </div>

        {/*right side*/}
        <div className="navbar__right">
          <button className="navbar__iconBtn" type="button" aria-label="Toggle theme">
            🌙
          </button>
          <button className="navbar__browseBtn" type="button">
            Browse
          </button>
        </div>
      </div>
    </header>
  );
}
