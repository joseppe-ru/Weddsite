const renderer = new marked.Renderer();

// Benutzerdefinierte Logik für Links (ich habe einen Standard-Pfad)
renderer.link = function (token) {
    
    // Basis-Pfad hinzufügen, wenn der Link relativ ist
    const basePath = '../Dokumentation/';

    let href = basePath + token.href; // Präfix einfügen
    console.log(token);

    // Optional: Link-Target auf '_blank' setzen
    // const target = href.startsWith('http') ? ' target="_blank"' : '';

    // Den HTML-Link generieren         ${target}
    return `<a href="${href}" title="${token.title || ''}">${token.text}</a>`;
};


//Funktion zum laden der Initialen Dokumentations-datei
async function loadMarkdown(filePath) {
    try {
        const response = await fetch(`../Dokumentation/${filePath}`);
        if (!response.ok) throw new Error(`Fehler beim Laden der Datei: ${response.status}`);
        const markdown = await response.text();
        document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error(error);
        document.getElementById('markdown-content').innerHTML = marked.parse('# In Bearbeitung ...');
    }
}

// Marked.js mit dem benutzerdefinierten Renderer konfigurieren
marked.setOptions({ renderer });

// Beispiel: Lade eine bestimmte Markdown-Datei
loadMarkdown('Hochzeit.md');


// document.getElementById('markdown-content').innerHTML = marked.parse('# Marked in browser\n\nRendered by **marked**.');
