onload = () => {
    document.body.classList.remove("container");
};

// Sincronizar las letras con la canción "Lo Que Siento" de Cuco
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con la letra y el tiempo de aparición (en segundos)
var lyricsData = [
  { text: "Dreamin' of you when I'm alone", time: 12 },
  { text: "Baby, don't trip, I'm coming home", time: 17 },
  { text: "Kick it with me, I don't care if the sun is gone", time: 22 },
  { text: "Baby, don't cry when I am gone", time: 27 },
  { text: "Promise you're everything I want", time: 32 },
  { text: "This is for you, baby, listen, it's your song", time: 37 },
  { text: "Oye cariño, solo pienso en ti", time: 42 },
  { text: "Cuando estoy solo y te extraño", time: 47 },
  { text: "Everything reminds me of you", time: 52 },
  { text: "I can't take no more", time: 57 },
  { text: "Girl, I think about you every day and night", time: 62 },
  { text: "It's only right to think about you all the time", time: 67 },
  { text: "My heart is everywhere you go", time: 72 },
  { text: "I know this is mutual", time: 77 },
  { text: "But you know I love you", time: 82 },
  { text: "I need you, I want you", time: 87 },
  { text: "Dreamin' of you when I'm alone", time: 92 },
  { text: "Baby, don't trip, I'm coming home", time: 97 },
  { text: "Kick it with me, I don't care if the sun is gone", time: 102 },
  { text: "Baby, don't cry when I am gone", time: 107 },
  { text: "Promise you're everything I want", time: 112 },
  { text: "This is for you, baby, listen, it's your song", time: 117 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Ocultar título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);

 const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('play_music') === 'true') {
        const music = document.getElementById('music');
        if (music) {
            music.play().then(() => {
                console.log('Música reproducida automáticamente.');
            }).catch(error => {
                console.error('No se pudo reproducir la música:', error);
            });
        }
    }