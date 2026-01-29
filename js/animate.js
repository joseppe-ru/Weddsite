import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const heart = document.querySelector('#heart_wrapper');

if (heart) {
  console.log("animate heart");
  heart.animate(
    [
      { top: '30vh', left: '25vw', height: '30vh', width: '50vw' }, // 0%
      { top: '0vh', left: '15vw', height: '50vh', width: '70vw', offset: 0.5 }, // 50%
      { top: '2vh', left: '5vw', height: '8vh', width: '20%' } // 100%
    ],
    {
      duration: 1,
      fill: 'forwards',
      timeline: new ScrollTimeline({
        source: document.documentElement,
        orientation: 'block',
      }),
      rangeStart: '0%',
      rangeEnd: '50%'
    }
  );
}

const head_prompt = document.querySelector('#head_prompt');

if (head_prompt) {
  
  console.log("animate prompt");
  head_prompt.animate(
    [
      { top: '50vh', left: '50vw', height: '1vh', width: '1vw' }, // 0%
      { top: '20vh', left: '50vw', height: '1vh', width: '1vw', offset: 0.5 }, // 50%
      { top: '2vh', left: '10vw', height: '8vh', width: '80vw' } // 100%
    ],
    {
      duration: 1,
      fill: 'forwards',
      timeline: new ScrollTimeline({
        source: document.documentElement,
        orientation: 'block',
      }),
      rangeStart: '0%',
      rangeEnd: '50%'
    }
  );
}

const head_prompt_container = document.querySelector('#head_prompt_container');

if(head_prompt_container){
  console.log("animate prompt cc");
  head_prompt_container.animate(
    [
      {transform: 'translateY(0)'},
      {transform: 'translateY(calc(-100% + 8vh))'}
    ],
    {
      duration: 1,
      fill: 'forwards',
      timeline: new ScrollTimeline({
        source: document.documentElement,
        orientation: 'block',
      }),
      rangeStart:'0%',
      rangeEnd:'100%'
      }
  );
}
