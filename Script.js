
const abrirBtn = document.getElementById("abrir");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");
const respuesta = document.getElementById("respuesta");

// Abrir la carta sorpresa
abrirBtn.addEventListener("click", () => {
    carta.hidden = false;
    abrirBtn.textContent = "Tu sorpresa está aquí ❤️";
    abrirBtn.disabled = true;
});

// Activar y pausar la música
musicaBtn.addEventListener("click", async () => {
    if (musica.paused) {
        try {
            await musica.play();
            musicaBtn.textContent = "♫ Pausar música";
        } catch (error) {
            musicaBtn.textContent = "No se pudo reproducir";
            alert(
                "Comprueba que musica.mp3 esté en la misma carpeta."
            );
        }
    } else {
        musica.pause();
        musicaBtn.textContent = "♫ Activar música";
    }
});

// Respuestas a la pregunta especial
document.querySelectorAll("[data-respuesta]").forEach((boton) => {
    boton.addEventListener("click", () => {
        if (boton.dataset.respuesta === "si") {
            respuesta.textContent =
                "Me alegra mucho leer eso. Gracias por darme la oportunidad ❤️🌹";
        } else {
            respuesta.textContent =
                "No hay prisa. Lo importante es que te sientas cómoda y seas sincera. 💌";
        }
    });
});

// Corazones flotantes
const movimientoReducido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!movimientoReducido.matches) {
    const simbolos = ["❤️", "♡", "♥", "✨"];

    function crearCorazon() {
        const corazon = document.createElement("span");

        corazon.className = "corazon";
        corazon.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = (12 + Math.random() * 18) + "px";
        corazon.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        document.body.appendChild(corazon);

        corazon.addEventListener("animationend", () => {
            corazon.remove();
        });
    }

    setInterval(crearCorazon, 650);
}