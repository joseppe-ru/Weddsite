async function testConnection() {
    try {
        const response = await fetch('/api/test');
        const data = await response.json();
        
        console.log("Backend-service: ", data.message);
    } catch (error) {
        console.error("Backend-Error: ", error);
    }
}

// Zum Testen direkt aufrufen
//testConnection();

async function fetchWishList() {
    try {
        const response = await fetch('/api/wishlist');
        const items = await response.json();

        console.log("Empfangene Liste:", items);

        const listContainer = document.getElementById('wishlist');
        listContainer.innerHTML = '';

        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listContainer.appendChild(li);
        });

    } catch (error) {
        console.error("Fehler beim Laden der Liste:", error);
        
        // // Testwerte für Entwicklung
        // const listContainer = document.getElementById('wishlist');
        // listContainer.innerHTML = '';
        //
        // const items = ["Friggl-Fraggl", "Regenbogeneinhorn", "Plumbus"];
        //
        // items.forEach(item => {
        //     const li = document.createElement('li');
        //     li.textContent = item;
        //     listContainer.appendChild(li);
        // });
     
      setTimeout(fetchWishList, 5000);

    }
}

fetchWishList();



/* Button Für Kafee Anmeldung
fetch("/api", {
    method: "POST", 
    headers: { "Content-Type": "application/json" }, // Header nicht vergessen!
    body: JSON.stringify({ tid: "1" })
})
.then(res => res.json())
.then(data => console.log(data));
*/
