import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import './News.css'

const News = () => {
    const [news, setNews] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [newNews, setNewNews] = useState({
        title: '',
        content: '',
        image_url: '',
        author: '',
        publish_at: '',
    });
    const [showLogin, setShowLogin] = useState(false);  // State to toggle login form visibility

    // Dynamic backend URL based on the environment variable or default to localhost
    const backendUrl = "http://localhost:5000";

    // Form handling for new news
    const handleNewNewsChange = (e) => {
        const { name, value } = e.target;
        setNewNews((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Fetch news data from the backend
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await fetch(`${backendUrl}/news`);
            const data = await response.json();
            setNews(data);
        } catch (err) {
            console.error('Error fetching news:', err);
        }
    };

    // Handle login logic
    const handleLogin = async () => {
        try {
            const response = await fetch(`${backendUrl}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) throw new Error('Invalid credentials');
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);
        } catch (err) {
            setError('Login failed');
        }
    };

    // Handle submit for new news
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!token) {
            alert('You must be logged in to create news.');
            return;
        }

        try {
            const response = await fetch(`${backendUrl}/news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(newNews),
            });

            if (response.ok) {
                fetchNews(); // Refresh the news list after successful submission
                alert('News created successfully!');
                setNewNews({
                    title: '',
                    content: '',
                    image_url: '',
                    author: '',
                    publish_at: '',
                });
            } else {
                alert('Failed to create news');
            }
        } catch (err) {
            console.error('Error creating news:', err);
        }
    };

    return (
        <div className="news-container">

          <h1 className="news-title">Aktualności</h1>
          <p className="news-subtitle">
            Bądź na bieżąco wraz ze Słodką Chwilą!
          </p>

            {/* News List */}
            <div className="news-list">
                {news.map((item) => (
                    <div className="news-item" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <small>Opublikowano: {new Date(item.publish_at).toLocaleString()}</small>
                    </div>
                ))}
            </div>


            <ul className="containerInfo">
              <div className="card16">
                <Link to="/contact" className="buttoninfo">
                  Kontakt
                </Link>
                
              </div>

            </ul>
            <ul className="info-tytul-media">
              <h3>Zaobserwój nas na mediach społecznościowych:</h3>
            </ul>


            {/* social media*/}
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-tiktok"></i> {/* TikTok Icon */}
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i> {/* Twitter Icon */}
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i> {/* Instagram Icon */}
                  </a>
                </li>
                
              </ul>
            </div>
            {/* Admin Login Trigger Button */}
            {!isAuthenticated && !showLogin && (
                <div className="admin-login-trigger">
                    <p>
                        <button className="login-btn" onClick={() => setShowLogin(true)}>
                            Tylko dla administracji
                        </button>
                    </p>
                </div>
            )}

            {/* Login Form (only visible if triggered) */}
            {showLogin && (
                <div className="login-form">
                    <h2>Administrator Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                    <button className="login-btn" onClick={handleLogin}>Login</button>
                    {error && <p className="error">{error}</p>}
                </div>
            )}

            {/* News Creation Form (only visible if logged in) */}
            {isAuthenticated && (
                <div className="new-news-form">
                    <h2>Create New News</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={newNews.title}
                            onChange={handleNewNewsChange}
                            required
                        />
                        <textarea
                            name="content"
                            placeholder="Content"
                            value={newNews.content}
                            onChange={handleNewNewsChange}
                            required
                        />
                        <input
                            type="text"
                            name="image_url"
                            placeholder="Image URL (optional)"
                            value={newNews.image_url}
                            onChange={handleNewNewsChange}
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={newNews.author}
                            onChange={handleNewNewsChange}
                            required
                        />
                        <input
                            type="datetime-local"
                            name="publish_at"
                            value={newNews.publish_at}
                            onChange={handleNewNewsChange}
                            required
                        />
                        <button type="submit" className="submit-btn">Submit News</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default News;
