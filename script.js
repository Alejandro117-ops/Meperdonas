const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const soundNo = document.getElementById('no-sound');
const soundYes = document.getElementById('yes-sound'); // Cambia este nombre si es necesario

let fontSize = 2;
let messages = [
  'Estas segurx?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
];

buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];

  soundNo.play(); // Reproduce el sonido cuando se hace clic en "No"
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
  
  // Reinicia y reproduce la canción de fondo
  soundYes.currentTime = 0; // Reinicia la canción
  soundYes.play(); // Reproduce la canción de fondo cuando se hace clic en "Sí"
});
