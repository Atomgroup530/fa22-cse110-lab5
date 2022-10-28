// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // initiate constants
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.getElementsByTagName('button')[0];
  const face = document.getElementsByTagName('img')[0];
  // #1 load SpeechSynthesizer and populate the “Select Voice” dropdown
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  // #2 Enable text-to-speech
  function speak() {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (inputTxt.value !== '') {
      const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

      utterThis.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
      };

      const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }
      synth.speak(utterThis);
    }
  }

  button.addEventListener('click', () => {
    speak();
  });

}