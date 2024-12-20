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

async function fetchhead(){
	const url = window.location.href;
	// const get_file_url = window.location.host + /file_name
	console.log("url: ",url);
	var param;
	try{
		response = await fetch(url);
		if (!response.ok){
			throw new Error(`Response status: ${response.status}`);
		}
		console.log(response);
		const param = response.headers.get('X-File-Param');
		console.log("Paralympics");
		console.log("Parameter: ", param);
	}	catch(error){
		console.log("ERR:");
		console.log(error);
	}
// Beispiel: Lade eine bestimmte Markdown-Datei
	if(param){
		loadMarkdown(param);
	}else{
		loadMarkdown("Hochzeit.md");
	}
}

// Marked.js mit dem benutzerdefinierten Renderer konfigurieren
marked.setOptions({ renderer });

// HTTP-Header auslesen (da sollte Dateiname drin stehen)
//fetchhead();

let md_file = window.location.pathname.split('/');
loadMarkdown(md_file[md_file.length-1]);

// document.getElementById('markdown-content').innerHTML = marked.parse('# Marked in browser\n\nRendered by **marked**.');
