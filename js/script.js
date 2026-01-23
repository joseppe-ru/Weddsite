
var Countdown_kachel = document.getElementById('countdown');

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

for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click",()=> resetTimer(100));
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
