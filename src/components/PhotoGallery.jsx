import React, { useEffect, useState } from "react";
import "./PhotoGallery.css"; // Стили для галереи

const PhotoGallery = () => {
  // Состояние для хранения списка фотографий
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  // URL API из переменной окружения или локальный сервер
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  // Функция для загрузки фото с сервера
  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${backendUrl}/photos`); // GET-запрос
      if (!response.ok) {
        throw new Error("Ошибка загрузки изображений");
      }
      const data = await response.json(); // Преобразование в JSON
      setPhotos(data); // Запись данных в состояние
    } catch (err) {
      setError(err.message); // Сохранение ошибки
    } finally {
      setLoading(false); // Завершение загрузки
    }
  };

  // Загрузка фото при монтировании компонента
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Если идёт загрузка
  if (loading) {
    return <p>Загрузка изображений...</p>;
  }

  // Если произошла ошибка
  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  // Отрисовка галереи
  return (
    <div className="photo-gallery">
      <h2>Галерея изображений</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.description || "Фото"} />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
