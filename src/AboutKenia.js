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
          <h2 className="text-white">Wsiadamy do Jeepa!</h2>
    <p className="text-white">Czyli tak zaczyna się nasza przygoda. Podjeżdżamy na umówione miejsce i zabieramy Was na Safari. 

Czym jedziemy? 

Najczęściej poruszamy się jeepem, który jest dostosowany do trudnych tras i off road po czerwonej ziemii! Wraz z kierowcą tworzymy dream team, który przenosi Was w świat pięknych i majestatycznych zwierząt abyście mogli „polować” aparatem na najpiękniejsze gatunki. 

Wariantów wycieczki jest wiele, może to być wyjazd jednodniowy, dwudniowy, trzy lub więcej!

Wszystko zależy od tego jakim budżetem Państwo dysponują i co chcecie zobaczyć. Każdy plan przygotowywany jest indywidualnie, tak aby pokazać Wam to co w Afryce jest najpiękniejsze.  
</p>
<a href="/buttons/42" class="btn41-43 btn-42 btn-sun">
              jak się przygotować
            </a></div>
    </div></section>
  );
};

export default AboutKenia;
