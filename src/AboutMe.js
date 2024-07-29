import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me"> 
    <div className="row">
    <div class="col-3 ">
<img className="avatar" src={require("./assets/eclipse.png")} />
    </div>
    <div class="col-5 ">
<h2>Hej! Jestem Richi</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
</p>
<a href="/buttons/42" class="btn41-43 btn-42 btn-sun">
              dowiedz się o mnie więcej
            </a>
    </div>
  </div>
    </div>
  );
};

export default AboutMe;
