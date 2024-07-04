import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <img
          className="footer-banner"
          src={require("../assets/footer-top.webp")}
        />

        <div className="outside">
          <div className="footer-box">
            <div className="div1">
              <img src={require("../assets/logo-hero.png")} />
            </div>
            <div className="div2">
              <ul>
                <li>O mnie</li>
                <li>O Safari</li>
                <li>O Kenii</li>
              </ul>
            </div>
            <div className="div3">
              <ul>
                <li>Kontakt</li>
                <li>Informacje przed wyjazdem</li>
                <li>Poradnik zdrowia</li>
              </ul>
            </div>
            <div className="div4">
              <ul>
                <li>Regulamin</li>
                <li>Polityka Prywatności</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <span>&copy; Copyrights RichiSafari</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
