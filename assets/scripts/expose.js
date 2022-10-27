// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // #1 display image and set audio
  let horn_select = document.getElementById('horn-select');
  horn_select.addEventListener('change', () => {
    // display image
    let image_select = document.getElementsByTagName('img');
    if (horn_select.value == 'air-horn'){
      image_select[0].src = 'assets/images/air-horn.svg';
    }
    if (horn_select.value == 'car-horn'){
      image_select[0].src = 'assets/images/car-horn.svg';
    }
    if (horn_select.value == 'party-horn'){
      image_select[0].src = 'assets/images/party-horn.svg';
    }
    // 
  });

  
}

