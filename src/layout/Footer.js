import "./Footer.css";
const Footer = () => {
  return (
    <>
<footer
        className="text-center text-lg-start"
        // style="background-color: #1c2331"
      >
        <img
          className="footer-banner"
          src={require("../assets/footer-top.webp")}
        />
        <div className="outside">
        <section className="main-footer-box ">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 ">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img className="footer-logo" src={require("../assets/logo-hero.png")} />
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                 <p>
                  <a className="text-white" href="https://richi-safari.vercel.app/oferta">
                  Oferta
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                  O Kenii
                  </a>
                </p>
               
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                  <a href="https://richi-safari.vercel.app/kontakt" className="text-white">
                  Kontakt
                  </a>
                </p>
                <p>
                  <a href="https://richi-safari.vercel.app/przed-wyjazdem" className="text-white">
                  Informacje przed wyjazdem
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p>
                  <a href="https://richi-safari.vercel.app/regulamin" className="text-white">
                  Regulamin
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                   FAQs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-left p-3 copyright text-white">
          © 2024 Copyright RichiSafari
          made by <a href="https://agata-jacyk.netlify.app/" className="text-white">♡</a>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
