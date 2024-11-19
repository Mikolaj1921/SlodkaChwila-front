import React from "react";
import { useForm } from "react-hook-form";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Skontaktuj się z nami</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Imię i nazwisko
        </label>
        <input
          {...register("name", { required: "To pole jest wymagane" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="name"
          type="text"
          placeholder="Wpisz swoje imię"
        />
        {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: "To pole jest wymagane",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Nieprawidłowy adres email",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="email"
          type="email"
          placeholder="Wpisz swój email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Wiadomość
        </label>
        <textarea
          {...register("message", { required: "To pole jest wymagane" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          id="message"
          placeholder="Napisz swoją wiadomość"
        />
        {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
