async function testConnection() {
    try {
        const response = await fetch('/api/test');
        const data = await response.json();
        
        console.log("Antwort vom Server:", data.message);
        alert("Server sagt: " + data.message);
    } catch (error) {
        console.error("Da lief was schief:", error);
    }
}

// Zum Testen direkt aufrufen
testConnection();
