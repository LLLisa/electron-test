const videoElement = document.querySelector('video');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const videoSelectButton = document.querySelector('#videoSelectButton');

videoSelectButton.onclick = getVideoSources;

const { desktopCapturer } = require('electron');
async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    type: ['window', 'screen'],
  });
}
