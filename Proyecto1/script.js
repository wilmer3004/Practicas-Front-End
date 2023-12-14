let heart = "off";
let heartStop = document.getElementById("heart");
let botonAudio = new Audio("./sound/Audio.mp3");
let letra = document.getElementById("body");

let contador = 0;
let contador1 = 0;

botonAudio.addEventListener('canplaythrough', () => {
    console.log("Audio cargado correctamente.");
});

letra.addEventListener('mouseover', () => {
    if (contador < 1) {
        mostrarAlerta("Este mensaje es para que sepas que si le das al corazón sonará una canción, pero no le des hasta que termine el otro mensaje.");
        
        setTimeout(() => {
            mostrarAlerta("Este otro mensaje es para que sepas que si disminuyes el aumento de la pantalla, mirarás otro detalle.");
        }, 7000);
        contador += 1;
    }
});

async function initCancion() {
    await cancion();
}

async function cancion() {
    if (heart == "off") {
        heart = "on";
        console.log("On");
        botonAudio.play();
        mensajes();

    } else {
        heart = "off";
        console.log("Off");
        heartStop.classList.remove("on");
        botonAudio.pause();
        botonAudio.currentTime = 0;
    }
}

async function mensajes() {
    mostrarAlerta("En español: 'Te quiero y no quiero perderte'...");

    setTimeout(() => {
        mostrarAlerta("En inglés: 'I love you and I don't want to lose'...");
    }, 7000);
    
    setTimeout(() => {
        mostrarAlerta("En italiano: 'Ti amo e non voglio perderti'...");
    }, 14000);

    setTimeout(() => {
        mostrarAlerta("En franses: 'Je t'aime et je ne veux pas te perdre'...");
    }, 21000);
    
    setTimeout(() => {
        mostrarAlerta("En cualquier idioma te podria decir lo mismo, lo importante es que he descubierto una maravillosa persona contigo, mi niña...");
    }, 28000);
    
    setTimeout(() => {
        mostrarAlerta("Pero lo que te quiero decir en realidad es que gracias, enserio mil gracias, te quiero un monton...");
    }, 35000);

    setTimeout(() => {
        mostrarAlerta("Perdón por molestar con estas tonterías.");
    }, 42000);
}

async function mostrarAlerta(mensaje) {
    const alertaContainer = document.createElement('div');
    alertaContainer.classList.add('alerta-container');

    const alerta = document.createElement('div');
    alerta.classList.add('alerta');
    alerta.textContent = mensaje;

    alertaContainer.appendChild(alerta);
    document.body.appendChild(alertaContainer);

    setTimeout(() => {
        document.body.removeChild(alertaContainer);
    }, 7000);
}
