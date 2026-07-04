//your JS code here. If required.
const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

let currentAudio = null;

sounds.forEach(sound => {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = sound;

  button.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttons.appendChild(button);
});

const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "stop";

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttons.appendChild(stopButton);