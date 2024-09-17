import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg lg-nav" data-bs-theme="dark">
  <div class="container-fluid lg-nav">
      <div class="d-flex">
      <ul class="navbar-nav ">
          <li class="nav-item">
<Link className="nav-link active" to="/">Strona Główna</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/">O Safari</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/oferta">Oferta</Link>
          </li>
        </ul>
      </div>
  </div>
</nav>
<nav class="navbar fixed-top sm-nav">
  <div class="container-fluid">
    <button class="navbar-toggler btn41-43 btn-42 btn-sand" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" data-bs-theme="dark">
      <span class="navbar-toggler-icon" data-bs-theme="dark"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
      <Link className="nav-link active" to="/"> <img className="header-logo" src={require("../assets/darkLogo.png")}
        /></Link>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
<Link className="nav-link active" to="/">Strona Główna</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/">O Safari</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to="/oferta">Oferta</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
  );
};

export default Header;
