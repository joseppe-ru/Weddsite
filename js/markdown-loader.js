const renderer = new marked.Renderer();

// Benutzerdefinierte Logik für Links (ich habe einen Standard-Pfad)
renderer.link = function (token) {
    
    // Basis-Pfad hinzufügen, wenn der Link relativ ist
    const basePath = '../Dokumentation/';

    let href = basePath + token.href; // Präfix einfügen
    //console.log(token);

    // Optional: Link-Target auf '_blank' setzen
    // const target = href.startsWith('http') ? ' target="_blank"' : '';

    // Den HTML-Link generieren         ${target}
    return `<a href="#${token.text||'error'}">${token.text}</a>`;
};

renderer.image = function(href,title,text){
		const img_path = path.join("Dokumentation/", href);
		return `<img src="${img_path}" alt="${text}" title="${text}/>`;
};

//Funktion zum laden der Initialen Dokumentations-datei
async function loadMarkdown(filePath,containerName) {
    try {
        const response = await fetch(`/Dokumentation/${filePath}`);
        if (!response.ok) throw new Error(`Fehler beim Laden der Datei: ${response.status}`);
        const markdown = await response.text();
        document.getElementById(containerName).innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error(error);
        document.getElementById(containerName).innerHTML = marked.parse('# In Bearbeitung ...');
    }
}


// Marked.js mit dem benutzerdefinierten Renderer konfigurieren
marked.setOptions({ renderer });

// Preload Navigation section:
loadMarkdown("Hochzeit.md","navigation-section");
// Markdow Filename aus Adresse auslesen (link beinhaltet Dateinamen):
let fragment = window.location.hash.substring(1);
console.log("Hash: "+fragment);
var md_file;
if (fragment && !fragment.endsWith('.md')){
	md_file=fragment+".md";
}else if(fragment && fragment.endsWith('.md')){
	md_file = fragment
}else {
	md_file = "Dokumentation.md";
}
console.log("loading: "+md_file);
loadMarkdown(md_file,'markdown-content');
// document.getElementById('markdown-content').innerHTML = marked.parse('# Marked in browser\n\nRendered by **marked**.');
