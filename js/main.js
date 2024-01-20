import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#element', {
  strings: ['Programer', 'Designer','Civil Goverment'],
  typeSpeed: 50,
  loop:true,
});



const toggleBtn = document.getElementById('toggleBtn');
const responsiveNav = document.getElementById('responsiveNav');

toggleBtn.addEventListener('click', () => {
  responsiveNav.classList.toggle('hidden');
});


const apresiasiBtn = document.getElementById("apresiasi");

apresiasiBtn.addEventListener("click", () => {


  var myCanvas = document.createElement('canvas');
  myCanvas.style.position = "fixed"
  myCanvas.style.inset = 0
  myCanvas.style.width = "100vw"
  myCanvas.style.height = "100vh"
  myCanvas.style.pointerEvents = "none";
  document.body.appendChild(myCanvas);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });
  myConfetti({
    particleCount: 100,
    spread: 160
  });


})
