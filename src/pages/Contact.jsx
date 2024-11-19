import React from "react";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Skontaktuj się z nami</h1>
      <p className="contact-subtitle">
        Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc w każdej sprawie!
      </p>
      <div className="contact-info">
        <p><strong>Email:</strong> kontakt@slodkachwila.pl</p>
        <p><strong>Telefon:</strong> +48 123 456 789</p>
        <p><strong>Adres:</strong> Cukierkowa 15, 00-123 Warszawa</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
