import MainHeader from "./layout/MainHeader";
const Contact = () => {
  return (
    <>
    <MainHeader />

    <div className="content-box">    
    <div class="card mb-3">
    <img className="card-img-top"src={require("./assets/regulamin.jpg")}/>
  <div class="card-body">
    <h1 class="card-title">Kontakt</h1>
    <a href="https://www.facebook.com/profile.php?id=61558391553348"><i class="bi bi-facebook"></i> Facebook</a><br />
    <a href="https://www.instagram.com/richi_safari_kenya/"><i class="bi bi-instagram"></i> Instagram</a><br />
    <i class="bi bi-envelope-at-fill"></i> e- mail - richisafari4@gmail.com<br />
    <i class="bi bi-whatsapp"></i> Whatsapp - +254 721 794177<br />
    <i class="bi bi-messenger"></i> Messenger - Richi Safari 
</div>
</div>
</div>
    </>
  );
};

export default Contact;
