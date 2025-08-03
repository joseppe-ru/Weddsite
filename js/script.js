// scroll funktion, wenmn auf Pfeil gedrückt. 
// Der pfeil ist auf der Startseite unten
const arrows = document.querySelectorAll('.arrow_container');
arrows.forEach(arrow => 
	arrow.addEventListener('click',function(){
    console.log("arrow");
    window.scrollBy({top:window.innerHeight, behavior:'smooth'})
}));

// nacheinander einfliegen von Kacheln beim anschauen der Seite
function is_in_viewport(element){ // retuns BOOLEAN
    var rect = element.getBoundingClientRect(); // element müsste eins der grid-container sein
	console.log("new-stats==")
	console.log(window.scrollY)
	console.log(window.scrollY + window.innerHeight)
	console.log(rect.top)
	console.log(rect.bottom)
	let ret = rect.top > window.scrollY && rect.bottom < (window.scrollY + window.innerHeight)
	console.log(ret)
    return true;
}
var elements_hover_in = document.querySelectorAll(".grid_container");
console.log(elements_hover_in)
function callback_hover_in(){
    for(let i=0; i<elements_hover_in.length;i++){
        if (is_in_viewport(elements_hover_in[i])){ // überprüfen, ob gird-container in viewport liegt??
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
