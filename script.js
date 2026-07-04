const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

// Create a single audio element in the DOM
const audio = document.createElement("audio");
document.body.appendChild(audio);

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    audio.src = `sounds/${sound}.mp3`;
    audio.play();
  });

  buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

buttons.appendChild(stopBtn);