const API_BASE_URL = process.env.REACT_APP_API_URL;


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