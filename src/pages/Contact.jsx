import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import ContactForm from "../components/ContactForm";
import logoIcon from "../components/images/logostr.png";

const Contact = () => {
  const [location, setLocation] = useState(null);

  // Dynamiczny URL backendu
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    // Pobierz współrzędne z backendu
    fetch(`${backendUrl}/api/location`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Błąd serwera: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Otrzymane dane lokalizacji:", data);
        setLocation(data);
      })
      .catch((error) => console.error("Błąd pobierania lokalizacji:", error));
  }, [backendUrl]);

  useEffect(() => {
    if (location) {
      // Jeżeli mapa jest już zainicjowana, nie twórz jej ponownie
      const existingMap = document.getElementById("map");
      if (existingMap._leaflet_id) {
        return; // Zwróć, jeśli mapa już istnieje
      }

      // Inicjalizacja mapy Leaflet
      const map = L.map("map").setView([location.latitude, location.longitude], 15);

      // Dodanie warstwy mapy OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Tworzenie ikony na podstawie obrazu (logo)
      const icon = L.icon({
        iconUrl: logoIcon, // Ścieżka do ikony
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      // Dodanie znacznika na mapie
      L.marker([location.latitude, location.longitude], { icon })
        .addTo(map)
        .bindPopup(location.name || "Cukiernia Słodka Chwila")
        .openPopup();
    }
  }, [location]); // Zależy od 'location'

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
