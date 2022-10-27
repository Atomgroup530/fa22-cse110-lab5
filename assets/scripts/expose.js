// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // initiate Confetti
  const jsConfetti = new JSConfetti();

  // #1 display image and set audio
  let horn_select = document.getElementById('horn-select');
  let image_select = document.getElementsByTagName('img');
  let audio_select = document.getElementsByClassName('hidden');
  horn_select.addEventListener('change', () => {
    if (horn_select.value == 'air-horn'){
      image_select[0].src = 'assets/images/air-horn.svg';
      image_select[0].alt = 'air-horn';
      audio_select.src = 'assets/audio/air-horn.mp3';
    }
    if (horn_select.value == 'car-horn'){
      image_select[0].src = 'assets/images/car-horn.svg';
      image_select[0].alt = 'car-horn';
      audio_select.src = 'assets/audio/car-horn.mp3';
    }
    if (horn_select.value == 'party-horn'){
      image_select[0].src = 'assets/images/party-horn.svg';
      image_select[0].alt = 'party-horn';
      audio_select.src = 'assets/audio/party-horn.mp3';
    }
  });

  // #2 slide bar setting
  let volume_select = document.getElementById('volume');
  volume_select.addEventListener('change', () =>{
    if (volume_select.value == 0) {
      image_select[1].src = 'assets/icons/volume-level-0.svg';
      image_select[1].alt = 'Volume level 0';
    }
    if ((1 <= volume_select.value) && (volume_select.value < 33)) {
      image_select[1].src = 'assets/icons/volume-level-1.svg';
      image_select[1].alt = 'Volume level 1';
    }
    if ((33 <= volume_select.value) && (volume_select.value < 67)){
      image_select[1].src = 'assets/icons/volume-level-2.svg';
      image_select[1].alt = 'Volume level 2';
    }
    if (volume_select.value >= 67) {
      image_select[1].src = 'assets/icons/volume-level-3.svg';
      image_select[1].alt = 'Volume level 3';
    }
  });
  // #3 play sound
  // sound function to be tested
  let button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', () => {
    let audio = new Audio(audio_select.src);
    audio.volume = volume_select.value / 100;
    audio.play();
    if (horn_select.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

