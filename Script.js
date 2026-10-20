
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
