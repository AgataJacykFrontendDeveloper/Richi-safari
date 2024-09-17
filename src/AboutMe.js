import "./AboutMe.css";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div className="about-me"> 
    <div className="row">
    <div class="col-3 ">
<img className="avatar" src={require("./assets/eclipse.png")} />
    </div>
    <div class="col-5 ">
<h2>Hej! Jestem Richi</h2>
      <p>Urodziłem się i mieszkam w Kenii. Jestem licencjonowanym przewodnikiem safari. Uwielbiam pracę z ludźmi, dlatego chcę Wam pokazać mój świat i Was ugości. Mówię po polsku, angielsku, włosku oraz niemiecku.</p>
<p>Zapraszam do wspólnej przygody. 
</p>
<Link className="btn41-43 btn-42 btn-sun" to="/oferta">zobacz ofertę</Link>
    </div>
  </div>
    </div>
  );
};

export default AboutMe;
