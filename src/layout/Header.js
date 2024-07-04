import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header"></div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <Link to="/">Strona Główna</Link>
        <Link to="/">O Safari</Link>
        <Link to="/">Oferta</Link>
      </div>
    </div>
  );
};

export default Header;
