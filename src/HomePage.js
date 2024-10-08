import "./HomePage.css";
import AboutMe from "./AboutMe.js";
import AboutKenia from "./AboutKenia.js";
import Review from "./Review.js";
import Header from "./layout/Header";
const HomePage = () => {
  return (
    <>
      <Header />
      <section id="Hero">
        <div className="welcome">
          <img src={require("./assets/logo-hero.png")} />
          <h1>Richi Safari</h1>
          <div className="shorthand">
            <a href="https://richi-safari.vercel.app/oferta" class="btn41-43 btn-42">
              Oferta
            </a>
              <a id="aboutMe-btn" href="https://richi-safari.vercel.app/kontakt">Kontakt</a>
          </div>
        </div>
      </section>
      <AboutMe />
      <AboutKenia />
      <Review />
    </>
  );
};

export default HomePage;
