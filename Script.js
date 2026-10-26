```javascript
/* =====================================
   ESTRELLAS
===================================== */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    starsContainer.appendChild(star);
}


/* =====================================
   CORAZONES
===================================== */

const heartsContainer =
    document.getElementById("hearts");

function crearCorazon() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const corazones = [
        "❤",
        "♡",
        "♥",
        "💕",
        "💗"
    ];

    heart.innerHTML =
        corazones[
            Math.floor(
                Math.random() * corazones.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 4 + 6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


/* Crear corazones constantemente */

setInterval(crearCorazon, 650);


/* =====================================
   MÚSICA
===================================== */

const music =
    document.getElementById("music");

function comenzar() {

    music.volume = 0.35;

    music.play().catch(() => {});

    document.getElementById("inicio")
        .classList.remove("activa");

    document.getElementById("declaracion")
        .classList.add("activa");

    escribirDeclaracion();
}


/* =====================================
   TEXTO DE DECLARACIÓN
===================================== */

const texto = `Naiverlyn Polanco,

Hay sentimientos que aparecen poco a poco,
sin hacer ruido, hasta que un día te das cuenta
de que esa persona ocupa un lugar muy especial
en tus pensamientos.

Y eso me pasó contigo.

No sé exactamente en qué momento empezaste
a importarme tanto, pero sé que cada vez que
pienso en ti aparece una sonrisa en mi rostro.

Me gusta tu forma de ser.
Me gusta hablar contigo.
Me gusta compartir momentos contigo.

Pero sobre todo, me gusta lo que siento
cuando estoy cerca de ti.

No quiero decirte palabras bonitas solamente
para impresionarte. Quiero ser sincero contigo.

Me estoy enamorando de ti.

Y aunque decirlo me da un poco de miedo,
prefiero arriesgarme a decirte lo que siento
antes que quedarme con todas estas palabras
guardadas dentro de mí.

Naiverlyn, tú eres una persona especial
para mí.

Y si alguna vez te has preguntado qué siento
por ti...

La respuesta es simple:

Te quiero.
Me importas.
Y quiero conocerte cada día más.

No sé qué nos tenga preparado el futuro,
pero sí sé que me gustaría descubrirlo
contigo. ❤️`;

let indice = 0;

function escribirDeclaracion() {

    const elemento =
        document.getElementById("textoDeclaracion");

    const velocidad = 28;

    function escribir() {

        if (indice < texto.length) {

            elemento.textContent +=
                texto.charAt(indice);

            indice++;

            setTimeout(
                escribir,
                velocidad
            );

        } else {

            document.getElementById(
                "continuarBtn"
            ).classList.remove("oculto");
        }
    }

    escribir();
}


/* =====================================
   MOSTRAR FINAL
===================================== */

function mostrarFinal() {

    document.getElementById("declaracion")
        .classList.remove("activa");

    document.getElementById("final")
        .classList.add("activa");

    window.scrollTo(0, 0);
}


/* =====================================
   BOTÓN "NECESITO PENSARLO"
===================================== */

const noBtn =
    document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moverBoton);

noBtn.addEventListener("touchstart", moverBoton);

function moverBoton() {

    const maxX =
        Math.max(
            20,
            window.innerWidth / 2 - 100
        );

    const maxY =
        Math.max(
            20,
            window.innerHeight / 2 - 50
        );

    const x =
        Math.random() * maxX -
        maxX / 2;

    const y =
        Math.random() * maxY -
        maxY / 2;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}


/* =====================================
   RESPUESTA "SÍ"
===================================== */

function respuestaSi() {

    const respuesta =
        document.getElementById("respuesta");

    respuesta.classList.remove("oculto");

    lanzarCorazones();
}


/* =====================================
   EXPLOSIÓN DE CORAZONES
===================================== */

function lanzarCorazones() {

    for (let i = 0; i < 45; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML = "❤️";

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.bottom =
                Math.random() * 50 + "%";

            heart.style.fontSize =
                (Math.random() * 25 + 15) + "px";

            heart.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);

        }, i * 80);
    }
}


/* =====================================
   CORAZÓN AL HACER CLICK
===================================== */

document.addEventListener("click", function(e) {

    if (
        e.target.tagName === "BUTTON"
    ) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.bottom = "auto";

    heart.style.fontSize = "22px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
});
```
