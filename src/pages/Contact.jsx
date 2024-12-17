import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Pobierz współrzędne z backendu
    fetch("https://slodkachwila.onrender.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        setLocation(data); // Zapisz lokalizację w stanie
      })
      .catch((error) => console.error("Błąd pobierania lokalizacji:", error));
  }, []); // Uruchomi się tylko raz po zamontowaniu komponentu

  useEffect(() => {
    if (location) {
      // Inicjalizacja mapy Leaflet tylko po załadowaniu lokalizacji
      const map = L.map("map").setView([location.latitude, location.longitude], 15);

      // Dodanie warstwy mapy OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Tworzenie ikony na podstawie obrazu (logo)
      const icon = L.icon({
        iconUrl: '../components/images/logosl.png', // Ścieżka do logo w folderze public
        iconSize: [40, 40], // Rozmiar ikony (możesz dostosować)
        iconAnchor: [20, 40], // Ustawienie punktu kotwiczenia na dole
        popupAnchor: [0, -40], // Ustawienie popupu nad markerem
      });

      // Dodanie znacznika na mapie
      L.marker([location.latitude, location.longitude], { icon })
        .addTo(map)
        .bindPopup(location.name || "Cukiernia Słodka Chwila")
        .openPopup();
    }
  }, [location]); // Ten efekt uruchomi się, gdy `location` się zmieni

  return (
    <div className="contact-page">
      <h1 className="contact-title">ZNAJDŹ NAS</h1>
      <p className="contact-subtitle">
        Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc w każdej sprawie!
      </p>

      <div className="contact-info">
        {/* Miejsce na mapę */}
        <aside className="map-container">
          <div id="map" style={{ width: "100%", height: "450px" }}></div>
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
