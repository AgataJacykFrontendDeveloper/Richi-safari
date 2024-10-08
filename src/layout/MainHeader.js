import "./MainHeader.css";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg lg-nav">
        <div class="container-fluid lg-nav">
          <Link className="nav-link active" to="/">
            {" "}
            <img
              className="header-logo"
              src={require("../assets/darkLogo.png")}
            />
          </Link>
          <div class="d-flex">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link className="nav-link active" to="/">
                  Strona Główna
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/oferta">
                  Oferta
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/przed-wyjazdem">
                  Przed wyjazdem
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="https://www.facebook.com/profile.php?id=61558391553348"
                >
                  {" "}
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="https://www.instagram.com/richi_safari_kenya/"
                >
                  {" "}
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar sm-nav">
        <div class="container-fluid">
          <button
            class="navbar-toggler btn41-43 btn-42 btn-sand"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            data-bs-theme="dark"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <a
                className="nav-link active"
                href="https://richi-safari.vercel.app"
              >
                {" "}
                <img
                  className="header-logo"
                  src={require("../assets/darkLogo.png")}
                />
              </a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a
                    className="nav-link active"
                    href="https://richi-safari.vercel.app"
                  >
                    Strona Główna
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    className="nav-link"
                    href="https://richi-safari.vercel.app/oferta"
                  >
                    Oferta
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    className="nav-link"
                    href="https://richi-safari.vercel.app/przed-wyjazdem"
                  >
                    Przed wyjazdem
                  </a>
                </li>
                <li class="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="https://www.facebook.com/profile.php?id=61558391553348"
                >
                  {" "}
                  <i class="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="https://www.instagram.com/richi_safari_kenya/"
                >
                  {" "}
                  <i class="bi bi-instagram"></i> Instagram
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
