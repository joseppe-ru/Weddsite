
var Countdown_kachel = document.getElementById('countdown');

function set_timer(){
const datetime = new Date(); // Aktuelle Zeit
    const marry_date = new Date('March 28, 2026 13:00:00');
    
    // Die Differenz in Millisekunden
    const diff = marry_date - datetime;

    if (diff <= 0) {
        Countdown_kachel.innerHTML = "00 tage | 00 : 00 : 00";
        return;
    }

    // Umrechnung der Millisekunden
    // 1 Tag = 24h * 60m * 60s * 1000ms = 86.400.000 ms
    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Der Restwert nach den Tagen sind die Stunden
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Der Restwert nach den Stunden sind die Minuten
    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    // Der Restwert nach den Minuten sind die Sekunden
    let s = Math.floor((diff % (1000 * 60)) / 1000);

    // Formatierung und Anzeige
    // Wir nutzen d.toString().padStart(2, '0'), das ist moderner als .slice()
    let tageDisplay = d < 10 ? '0' + d : d; 
    
    Countdown_kachel.innerHTML = 
        tageDisplay + ' t   ' + 
        ('0' + h).slice(-2) + 'h  ' + 
        ('0' + m).slice(-2) + 'm  ' + 
        ('0' + s).slice(-2) + 's '
    setTimeout(set_timer,500);
}
set_timer();

//==========
//SliedeShow
//==========
const slide_container = document.querySelector(".slideshow-container");
const dots = document.getElementsByClassName("dot");
let autoScrollTimer;
function currentSlide(n) {
    const width = slide_container.clientWidth;
    // Scrollen zur Position: (Nummer - 1) * Breite
    slide_container.scrollTo({
        left: width * (n - 1),
        behavior: 'smooth'
    });
}

function resetTimer(t){
  console.log("slide timer reset")
  autoScrollTimer = t;
}
function disableTimer(){
  autoScrollTimer = -1;
}


function autoscroll(slide){
  if (autoScrollTimer!=-1){
    if (autoScrollTimer>0){
      autoScrollTimer-=1;
    } else{
      if (slide >= dots.length){slide = 0;} else{slide +=1;}
      currentSlide(slide);
      console.log(slide);
      resetTimer(5);
    }
  }
  setTimeout(() => autoscroll(slide), 1000);
}

setTimeout(() => autoscroll(0), 1000);

slide_container.addEventListener('scroll', () => {
    const scrollPos = slide_container.scrollLeft;
    const width = slide_container.clientWidth;
    const index = Math.round(scrollPos / width);

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Richtigen Punkt aktiv setzen (falls vorhanden)
    if (dots[index]) {
        dots[index].className += " active";
    }
});

slide_container.addEventListener('click', ()=> resetTimer(100));
slide_container.addEventListener('touchstart', ()=> resetTimer(100));

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click",()=> {
    resetTimer(100);
    currentSlide(i+1);
  });
}


dots[0].className += " active";
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    if (this.classList.contains("active_accordion")){
      return;
    }

    for (var j=0;j<acc.length;j++){
      if (acc[j]==this){
        acc[j].classList.add("active_accordion")
       }
      else{
        acc[j].classList.remove("active_accordion")
      }
    }

  });
}

console.log("Toggle first accordeon...");
acc[0].classList.add("active_accordion");
acc[0].nextElementSibling.style.display = "block";



/* Text für eine Überschrift der Seite*/
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  document.body.style.setProperty('--scroll', scrolled);
});
