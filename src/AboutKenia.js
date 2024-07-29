import "./AboutKenia.css";
const AboutKenia = () => {
  return (
    <section>
    <div className="about-kenia"> 
    <div className="row">
    <div class="col-5 "><h2>O Kenii</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
</p>
<a href="/buttons/42" class="btn41-43 btn-42 btn-sand">
              dowiedz się więcej
            </a>

    </div>
    <div class="col-3 ">
<img className="kenia-map" src={require("./assets/Kenia.png")} />
    </div>
  </div>
    </div>

    <div className="zebra-fact">
        <div>
    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>
<a href="/buttons/42" class="btn41-43 btn-42 btn-sun">
              dowiedz się więcej
            </a></div>
    </div></section>
  );
};

export default AboutKenia;
