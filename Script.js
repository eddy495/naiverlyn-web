
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const botonAbrir = document.getElementById("abrir");
    const carta = document.getElementById("carta");
    const botonMusica = document.getElementById("musicaBtn");
    const musica = document.getElementById("musica");
    const respuesta = document.getElementById("respuesta");
    const botonesRespuesta = document.querySelectorAll("[data-respuesta]");

    // Abrir y cerrar la sorpresa.
    if (botonAbrir && carta) {
        botonAbrir.addEventListener("click", () => {
            const estaOculta = carta.hidden;

            carta.hidden = !estaOculta;

            if (estaOculta) {
                botonAbrir.textContent = "Cerrar mi sorpresa 💌";
                carta.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            } else {
                botonAbrir.textContent = "Descubre tu sorpresa 💌";
            }
        });
    }

    // Reproducir o pausar la música.
    if (botonMusica && musica) {
        botonMusica.addEventListener("click", async () => {
            if (musica.paused) {
                try {
                    await musica.play();
                    botonMusica.textContent = "Ⅱ Pausar música";
                } catch (error) {
                    botonMusica.textContent = "No se pudo reproducir ♫";
                    console.error("Error al reproducir la música:", error);
                }
            } else {
                musica.pause();
                botonMusica.textContent = "♫ Activar música";
            }
        });

        musica.addEventListener("ended", () => {
            botonMusica.textContent = "♫ Activar música";
        });
    }

    // Mostrar el mensaje según la respuesta.
    botonesRespuesta.forEach((boton) => {
        boton.addEventListener("click", () => {
            if (!respuesta) return;

            const opcion = boton.dataset.respuesta;

            if (opcion === "si") {
                respuesta.textContent =
                    "¡Me alegra mucho! ❤️ Gracias por darme la oportunidad.";
            } else if (opcion === "pensar") {
                respuesta.textContent =
                    "Está bien. Tómate tu tiempo; lo importante es que te sientas cómoda. 💗";
            }
        });
    });

    console.log("Página de Naiverlyn cargada correctamente ❤️");
});

// Crear estrellas y corazones flotantes.
(() => {
    const iniciarEfectos = () => {
        const fondo = document.getElementById("efectos-fondo");
        if (!fondo || fondo.dataset.iniciado === "si") return;

        fondo.dataset.iniciado = "si";

        const simbolos = [
            { texto: "♥", clase: "corazon" },
            { texto: "♡", clase: "corazon" },
            { texto: "✦", clase: "estrella" },
            { texto: "✧", clase: "estrella" },
            { texto: "⋆", clase: "estrella" }
        ];

        for (let i = 0; i < 28; i++) {
            const efecto = simbolos[
                Math.floor(Math.random() * simbolos.length)
            ];

            const particula = document.createElement("span");
            particula.className = `particula ${efecto.clase}`;
            particula.textContent = efecto.texto;
            particula.style.left = `${Math.random() * 100}%`;
            particula.style.fontSize = `${12 + Math.random() * 18}px`;
            particula.style.animationDuration = `${8 + Math.random() * 12}s`;
            particula.style.animationDelay = `${-Math.random() * 18}s`;

            fondo.appendChild(particula);
        }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarEfectos);
    } else {
        iniciarEfectos();
    }
})();
