import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css"; // Import Twoich stylów

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Wiadomość została wysłana!");
      } else {
        alert("Wystąpił problem. Spróbuj ponownie.");
      }
    } catch (error) {
      alert("Błąd połączenia z serwerem.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Skontaktuj się z nami po przez formularz</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            {...register("name", { required: "To pole jest wymagane" })}
            className="form-input"
            id="name"
            type="text"
            placeholder="Wpisz swoje imię"
          />
          {errors.name && <p className="contact-form-message">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "To pole jest wymagane",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Nieprawidłowy adres email",
              },
            })}
            className="form-input"
            id="email"
            type="email"
            placeholder="Wpisz swój email"
          />
          {errors.email && <p className="contact-form-message">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message">Wiadomość</label>
          <textarea
            {...register("message", { required: "To pole jest wymagane" })}
            className="form-textarea"
            id="message"
            placeholder="Napisz swoją wiadomość"
          />
          {errors.message && <p className="contact-form-message">{errors.message.message}</p>}
        </div>
        <button type="submit" className="form-button">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;