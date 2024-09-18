import "./AboutKenia.css";
const AboutKenia = () => {
  return (
    <section>
    <div className="about-kenia"> 
    <div className="row">
    <div class="col-5 "><h2>O Kenii</h2>
      <p> Kenia to prawdziwa perła Afryki, która oferuje niezapomniane wrażenia na każdej płaszczyźnie. To raj dla miłośników przyrody i przygód. Safari w Kenii to szansa, by zobaczyć na własne oczy "Wielką Piątkę" – lwy, słonie, bawoły, lamparty i nosorożce – w ich naturalnym środowisku. Park Narodowy Masai Mara zachwyci cię malowniczymi widokami i spektakularnymi migracjami zwierząt.

Oprócz dzikiej przyrody, Kenia oferuje też zapierające dech w piersiach plaże nad Oceanem Indyjskim, np. Diani Beach, idealne do nurkowania, surfingu i relaksu. Spotkasz tam również fascynujące kultury, takie jak plemię Masajów, które pokaże ci zupełnie inny sposób życia.

Jeśli szukasz miejsca, które łączy przyrodę, przygodę i różnorodność kulturową, Kenia jest idealnym wyborem!</p>
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
<a href="https://richi-safari.vercel.app/przed-wyjazdem" class="btn41-43 btn-42 btn-sun">
              jak się przygotować
            </a></div>
    </div></section>
  );
};

export default AboutKenia;
