const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const sound = document.getElementById('no-sound');

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

  sound.play(); // Reproduce el sonido cuando se hace clic en "No"
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
});
