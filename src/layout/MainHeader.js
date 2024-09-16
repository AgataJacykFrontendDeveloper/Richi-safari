import "./MainHeader.css";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
<nav class="navbar fixed-top" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img className="header-logo" src={require("../assets/darkLogo.png")}
        /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
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
          <Link className="nav-link" to="/">Oferta</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default MainHeader;
