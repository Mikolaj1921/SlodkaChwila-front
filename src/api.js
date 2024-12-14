const API_BASE_URL = "https://slodkachwila.onrender.com";

fetch(`${API_BASE_URL}/api/messages`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: "Hello, backend!"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));