import MainHeader from "./layout/MainHeader";
const Regulations = () => {
  return (
    <>
    <MainHeader />

    <div className="content-box">    
    <div class="card mb-3">
    <img className="card-img-top"src={require("./assets/regulamin.jpg")}/>
  <div class="card-body">
    <h5 class="card-title"><h1>Regulamin</h1></h5>
  <ol className="list-group list-group-numbered">
    <li className="list-group-item">Wycieczkę można rezerwować przez kontakt: <br />
    e- mail - richisafari4@gmail.com<br />

Whatsapp - +254 721 794177<br />

Messenger - Richi Safari </li>
    <li className="list-group-item">Potwierdzeniem rezerwacji jest wpłata zaliczki w wysokości 30%  ceny wycieczki do 7 dni przed ustalonym terminem wyjazdu. W tytule przelewu należy podać imię i nazwisko oraz ustaloną datę.</li>
    <li className="list-group-item">Ceny wycieczek ustalane sa indywidualnie i są zależne od cen niezależnych od organizatora (tj. Zakwaterowanie, paliwo, bilety wstępu) </li>
    <li className="list-group-item">Proszę o punktualne przybycie na ustalone miejsce zbiórki. </li>
    <li className="list-group-item">Kategorycznie zakazuje się spożywania alkoholu oraz palenia papierosów podczas safari. Przewodnik zastrzega sobie prawo do odmówienia zabrania turysty, który jest pod wpływem alkoholu lub substancji psychoaktywnych na wyjazd pobierając 100% ustalonej kwoty. </li>
    <li className="list-group-item">Nie zabieramy na teren parków narodowych: broni, alkoholu, narkotyków, dronów ani substancji łatwopalnych.</li>
    <li className="list-group-item">Zakazuje się opuszczania pojazdu na własną rękę. </li>
    <li className="list-group-item">Należy słuchać zaleceń przewodnika celem zachowania bezpieczeństwa. </li>
    <li className="list-group-item">Szanujemy naturalne środowisko dlatego nie pozostawiamy śmieci i zachowujemy ciszę nie nawołując zwierząt.</li>
    <li className="list-group-item">Od organizatora nie zależy ilość zwierząt oraz gatunków, którą Państwo zobaczą. </li>
    <li className="list-group-item">Organizator nie odpowiada za rzeczy osobiste klientów. </li>
    <li className="list-group-item">Turysta zobowiązany jest do posiadania kopii lub zdjęcia paszportu w celu zakwaterowania w hotelu. </li>
    <li className="list-group-item">Proszę pamiętać o zabraniu ze soba nakryć głowy oraz przyjmowanych leków. </li>
  </ol>
</div>
</div>
</div>
    </>
  );
};

export default Regulations;
