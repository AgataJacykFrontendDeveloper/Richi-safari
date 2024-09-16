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
            <a href="/buttons/42" class="btn41-43 btn-42">
              O safari
            </a>
            <span id="aboutMe-btn">
              <a>O mnie</a>
            </span>
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
