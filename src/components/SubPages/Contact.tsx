import "./../styles/CustomContact.css";

interface LandingProps {
  isLightMode: boolean;
}

function Contact({ isLightMode }: LandingProps) {
  return (
    <>
      <div
        className={`row ${isLightMode ? "light-mode" : ""}`}
        id="contact"
      ></div>
      <div className={`row ${isLightMode ? "light-mode" : ""}`} id="contactRow">
        <div className="col-md-12" id="contactCol">
          <h5 className="contactMe">Contact</h5>
          <ul className="list-group" style={{ textAlign: "justify" }}>
            <li className="list-group-item">
              <img
                src="/images/phone-call.png"
                className="contact-icon"
                width="30"
                height="30"
              ></img>
              <a
                href="tel:+48602231582"
                style={{ color: "black", textDecoration: "none" }}
              >
                +48 602 231 582
              </a>
            </li>
            <li className="list-group-item">
              <img
                src="/images/4550857_email_gmail_mail_sending_yahoo_icon.png"
                className="contact-icon"
                width="30"
                height="30"
              ></img>
              Michal.Skrobot@student.uj.edu.pl
            </li>
            <li className="list-group-item">
              <img
                src="/images/github.png"
                className="contact-icon"
                width="30"
                height="30"
              />
              <a
                href="https://github.com/MSkrobot"
                style={{ color: "black", textDecoration: "none" }}
              >
                GitHub.com
              </a>
            </li>
            <li className="list-group-item">
              <img
                src="/images/linkedin.png"
                className="contact-icon"
                width="30"
                height="30"
              ></img>
              <a
                href="https://www.linkedin.com/in/micha%C5%82-skrobot-54b397273/"
                style={{ color: "black", textDecoration: "none" }}
              >
                LinkedIn.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer">
          <h1 className="thanks">Thank you for visiting</h1>
          Thank you for visiting hvala na posjeti Благодаря ти за посещението
          Salamat sa pagbisita Danke für Ihren Besuch bedankt voor het bezoeken
          Terima kasih telah berkunjung terima kasih kerana melawat Gràcies per
          la visita Díky za návštěvu Va multumim pentru vizita Takk for besøket
          Ďakujem za návštevu Дякуємо, що завітали Tack för besöket Thank you
          for visiting hvala na posjeti Благодаря ти за посещението Salamat sa
          pagbisita Danke für Ihren Besuch bedankt voor het bezoeken Gràcies per
          la visita Díky za návštěvu Va multumim pentru vizita Takk for besøket
          Ďakujem za návštevu Дякуємо, що завітали Tack för besöket Thank you
          for visiting hvala na posjeti Благодаря ти за посещението Salamat sa
          pagbisita Danke für Ihren Besuch bedankt voor het bezoeken Thank you
          for visiting hvala na posjeti Благодаря ти за посещението Salamat sa
          pagbisita Danke für Ihren Besuch bedankt voor het bezoeken Terima
          kasih telah berkunjung terima kasih kerana melawat Gràcies per la
          visita Thank you for visiting hvala na posjeti Благодаря ти за
          посещението Salamat sa pagbisita Danke für Ihren Besuch bedankt voor
          het bezoeken Terima kasih telah berkunjung terima kasih kerana melawat
          Gràcies per la visita Thank you for visiting hvala na posjeti
          Благодаря ти за посещението Salamat sa pagbisita Danke für Ihren
          Besuch bedankt voor het bezoeken Terima kasih telah berkunjung terima
          kasih kerana melawat Gràcies per la visita Díky za návštěvu Va
          multumim pentru vizita Takk for besøket Ďakujem za návštevu Дякуємо,
          що завітали Tack för besöket Thank you for visiting hvala na posjeti
          Благодаря ти за посещението Salamat sa pagbisita Danke für Ihren
          Besuch bedankt voor het bezoeken Terima kasih telah berkunjung terima
          kasih kerana melawat Gràcies per la visita Díky za návštěvu Va
          multumim pentru vizita Takk for besøket Ďakujem za návštevu Дякуємо,
          що завітали Tack för besöket
        </div>
      </div>
    </>
  );
}

export default Contact;
