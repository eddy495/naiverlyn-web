
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const botonAbrir = document.getElementById("abrir");
    const carta = document.getElementById("carta");
    const botonMusica = document.getElementById("musicaBtn");
    const musica = document.getElementById("musica");
    const respuesta = document.getElementById("respuesta");
    const botonesRespuesta = document.querySelectorAll("[data-respuesta]");

    // Abrir y cerrar la carta.
    if (botonAbrir && carta) {
        botonAbrir.addEventListener("click", () => {
            carta.hidden = !carta.hidden;

            botonAbrir.textContent = carta.hidden
                ? "Descubre tu sorpresa 💌"
                : "Cerrar mi sorpresa 💌";

            if (!carta.hidden) {
                carta.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });
    }

    // Activar y pausar la música.
    if (botonMusica && musica) {
        botonMusica.addEventListener("click", async () => {
            if (musica.paused) {
                try {
                    await musica.play();
                    botonMusica.textContent = "Ⅱ Pausar música";
                } catch (error) {
                    console.error("No se pudo reproducir la música:", error);
                    botonMusica.textContent = "Intenta activar la música ♫";
                }
            } else {
                musica.pause();
                botonMusica.textContent = "♫ Activar música";
            }
        });

        musica.addEventListener("pause", () => {
            botonMusica.textContent = "♫ Activar música";
        });

        musica.addEventListener("play", () => {
            botonMusica.textContent = "Ⅱ Pausar música";
        });
    }

    // Respuestas de la carta.
    botonesRespuesta.forEach((boton) => {
        boton.addEventListener("click", () => {
            if (!respuesta) return;

            if (boton.dataset.respuesta === "si") {
                respuesta.textContent =
                    "¡Me alegra mucho! ❤️ Gracias por darme la oportunidad.";
            } else if (boton.dataset.respuesta === "pensar") {
                respuesta.textContent =
                    "Está bien. Tómate tu tiempo. Lo importante es que te sientas cómoda. 💗";
            }
        });
    });

    // Crear estrellas y corazones flotantes.
    function crearEfectos() {
        const fondo = document.getElementById("efectos-fondo");

        if (!fondo) {
            console.error("No se encontró el contenedor de efectos.");
            return;
        }

        fondo.replaceChildren();

        const simbolos = [
            { texto: "♥", clase: "corazon" },
            { texto: "♡", clase: "corazon" },
            { texto: "❤", clase: "corazon" },
            { texto: "✦", clase: "estrella" },
            { texto: "✧", clase: "estrella" },
            { texto: "⋆", clase: "estrella" },
            { texto: "★", clase: "estrella" }
        ];

        for (let i = 0; i < 36; i++) {
            const simbolo =
                simbolos[Math.floor(Math.random() * simbolos.length)];

            const particula = document.createElement("span");
            particula.className = `particula ${simbolo.clase}`;
            particula.textContent = simbolo.texto;

            const duracion = 8 + Math.random() * 12;
            const retraso = Math.random() * -20;

            particula.style.left = `${Math.random() * 100}%`;
            particula.style.fontSize = `${12 + Math.random() * 18}px`;
            particula.style.animationDuration = `${duracion}s`;
            particula.style.animationDelay = `${retraso}s`;

            fondo.appendChild(particula);
        }

        console.log("Estrellas y corazones activados ❤️");
    }

    crearEfectos();
});
