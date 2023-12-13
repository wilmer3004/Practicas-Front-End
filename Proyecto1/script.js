
let heart = "off";
let heartStop = document.getElementById("heart");
let botonAudio = new Audio ("./sound/Audio.mp3");

botonAudio.addEventListener('canplaythrough', () => {
    console.log("Audio cargado correctamente.");
});

async function initCancion() {
    await cancion();
}

async function cancion() {
    if (heart == "off") {
        heart = "on";
        heartStop.classList.add("on");
        console.log("On");
        botonAudio.play();
    } else {
        heart = "off";
        console.log("Off");
        heartStop.classList.remove("on");
        botonAudio.pause();
        botonAudio.currentTime = 0; 
    }
}
