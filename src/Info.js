import MainHeader from "./layout/MainHeader";
const Info = () => {
  return (
    <>
    <MainHeader />

    <div className="content-box">    
    <div class="card mb-3">
    <img className="card-img-top"src={require("./assets/nairobi.png")}/>
  <div class="card-body">
    <h5 class="card-title"><h1>Informacje przed wyjazdem</h1></h5>
    <p class="card-text"><b>Stolica:</b> Nairobi <br/>

<b>Lotniska:</b> 
Port lotniczy Jomo Kenyatta (NBO)Nairobi 

Moi International Airport (MBA) Mombasa 
<br/>
<b>Język urzędowy:</b> Suahili, Angielski 
<br/>
<b>Waluta:</b> szyling kenijski, dolar amerykański wydane po 2009 roku. 
<br/>
<b>Dokumenty:</b> paszport 
<br/>
<b>Czas:</b> +2 godziny (Zimą) 
<br/>
<b>Czas lotu:</b> ok. 10 godzin 
<br/>
<b>Temperatura:</b> średnia temperatura w ciągu roku to 25-30 stopni. Gdy w Polsce panuje zima w Kenii sytuacja jest odwrotna i temperatury sięgają najwyższe wskaźniki.
<br/>
<b>Komary </b>
<br/>
<b>Szczepienia:</b> brak wymaganych, jednak zaleca się szczepienia przeciwko WZW (typ A), żółtej febrze i  tężcowi.
<br/>
<b>Woda:</b> zalecane jest spożywanie wody butelkowanej oraz używanie jej do mycia zębów i płukania szczoteczki.
</p>
<h2>Warto spakowac:</h2>
<div class="row">
  <div class="col-sm-6 mb-3">
<div className="card">
  <div className="card-header">
  <b>Leki</b>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Elektrolity</li>
    <li className="list-group-item">Przeciwzapalne i przeciwbólowe </li>
    <li className="list-group-item">Przeciwbiegunkowe </li>
    <li className="list-group-item">Antybiotyk</li>
    <li className="list-group-item">Na infekcje w drogach moczowych</li>
    <li className="list-group-item">Preparat łagodzący podrażnienia i oparzenia skóry</li>
    <li className="list-group-item">Leki na stałe przyjmowane</li>
    <li className="list-group-item">Środki odkażające</li>
  </ul>
</div>
</div>
<div class="col-sm-6">
<div className="card">
  <div className="card-header">
    <b>Pozostałe</b>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Krem z filtrem SPF 50</li>
    <li className="list-group-item">Mydło w listkach</li>
    <li className="list-group-item">Środek dezynfekujący do rąk</li>
    <li className="list-group-item">Chusteczki nawilżane</li>
    <li className="list-group-item">Mugga 50% DEET</li>
    <li className="list-group-item">Adapter 220v z trzema prostokątnymi  bolcami</li>
    <li className="list-group-item">Kserokopia paszportu</li>
    <li className="list-group-item">Nakrycie głowy i okulary przeciwsłoneczne</li>
  </ul>
</div>  </div>
</div>

</div>
</div>
</div>
    </>
  );
};

export default Info;
