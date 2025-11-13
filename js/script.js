// scroll funktion, wenmn auf Pfeil gedrückt. 
// Der pfeil ist auf der Startseite unten
const arrows = document.querySelectorAll('.arrow_container');
arrows.forEach(arrow => 
	arrow.addEventListener('click',function(){
    console.log("arrow");
    window.scrollBy({top:window.innerHeight, behavior:'smooth'})
}));

// nacheinander einfliegen von Kacheln beim anschauen der Seite
function is_in_viewport(element,iteration){ // retuns BOOLEAN
    var rect = element.getBoundingClientRect(); // element müsste eins der grid-container sein
	let ret = rect.top >= -10 && rect.bottom <= window.innerHeight + 10
    
    return ret;
}
var elements_hover_in = document.querySelectorAll(".grid_container");
console.log(elements_hover_in)
function callback_hover_in(){
    console.log("==>> Next Step")
    for(let i=0; i<elements_hover_in.length;i++){
        if (is_in_viewport(elements_hover_in[i],i)){ // überprüfen, ob gird-container in viewport liegt??
            //console.log(true);
            elements_hover_in[i].classList.add("visible");

        }
        else {
            //console.log(false);
            elements_hover_in[i].classList.remove("visible");
        }
    }
}

window.addEventListener('scroll',callback_hover_in);
window.addEventListener('load',callback_hover_in);

// großer Countdown bis zum TagX+
var Countdown_kachel = document.getElementById('countdown');

// timer noch fertigmachen (datum ausrtechen und aktualisiern)
function set_timer(){
    var datetime = new Date;
    const marry_date = new Date('March 28, 2026 13:00:00');
    var date_till = new Date(marry_date - datetime);
    let h = date_till.getHours();
    let m = date_till.getMinutes();
    let s = date_till.getSeconds();
    let d = date_till.getUTCDay();
    let ms = date_till.getMonth();
    Countdown_kachel.innerHTML = ('0'+ ms).slice(-2) + ' Monate, ' + ('0'+d).slice(-2) + ' Tage, '+ ('0'+h).slice(-2) + ' : ' +('0'+ m).slice(-2) + ' : ' + ('0'+s).slice(-2) ;
    setTimeout(set_timer,500);
}
set_timer();


function expandCard(clickedCard, position) {
  // Finde den übergeordneten Container
  const container = clickedCard.closest('.information_container');
  
  // Finde alle Karten
  const allCards = container.querySelectorAll('.index_card');
  
  // 1. Entferne die "expanded" Klasse von allen Karten und die Layout-Klasse vom Container
  allCards.forEach(card => {
    card.classList.remove('expanded');
  });

  // Entferne alle expand-Klassen vom Container
  container.classList.remove('expand-1', 'expand-2', 'expand-3', 'expand-4');

  // 2. Prüfe, ob die geklickte Karte bereits erweitert war
  // Wir verwenden die Container-Klasse, um den Zustand zu prüfen
  const isAlreadyExpanded = container.classList.contains(`expand-${position}`);
  
  if (!isAlreadyExpanded) {
    // 3. Wenn die Karte NOCH NICHT erweitert war: Erweitere sie
    clickedCard.classList.add('expanded');
    container.classList.add(`expand-${position}`);
  } 
  // Ansonsten: Klick dient als Toggle, d.h., beide Klassen bleiben entfernt.
}
