import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">ZNAJDŹ NAS</h1>
      <p className="contact-subtitle">
        Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc w każdej sprawie!
      </p>


      <div className="contact-info">
        <aside className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.659834413859!2d21.99834561570134!3d50.03656577942113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa8b9cd40315%3A0x5e8c94736a3d6675!2sRynek%2022%2C%2035-064%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1690205150017!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </aside>


        <div className="contact-details">
          <p><strong>Email:</strong> slodka@chwila.rzeszow.pl</p>
          <p><strong>Telefon:</strong> +48 789 333 555 , +48 791 732 787</p>
          <p><strong>Adres:</strong> Rynek 22, 35-064 Rzeszów</p>
          <h2><strong>Godziny otwarcia:</strong></h2>
          <p>Poniedziałek: 16:00-23:00</p>
          <p>Wtorek: 16:00-23:00</p>
          <p>Środa: 16:00-23:00</p>
          <p>Czwartek: 16:00-23:00</p>
          <p>Piątek: 16:00-01:00</p>
          <p>Sobota: 12:00-01:00</p>
          <p>Niedziela: 12:00-22:00</p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
