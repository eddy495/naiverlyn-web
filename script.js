(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const starsContainer = $("stars");
  const heartsContainer = $("hearts");
  const music = $("music");
  const textoElemento = $("textoDeclaracion");

  // Genera estrellas de forma segura al cargar la página.
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const size = Math.random() * 2.2 + 0.7;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = (2 + Math.random() * 3) + "s";
    starsContainer.appendChild(star);
  }

  function crearCorazon() {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["❤", "♡", "♥", "💕", "💗"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 19) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";
    heart.style.setProperty("--deriva", (Math.random() * 100 - 50) + "px");
    heartsContainer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 12000);
  }
  window.setInterval(crearCorazon, 700);

  const texto = `Naiverlyn Polanco,

Hay sentimientos que aparecen poco a poco, casi sin avisar, hasta que un día te das cuenta de que alguien se ha vuelto una persona muy especial para ti.

Eso me ha pasado contigo. No sé si encontraré las palabras perfectas para explicártelo, pero quiero ser sincero y hablarte desde el corazón.

Me gusta tu forma de ser, me gusta hablar contigo y me gusta la alegría que siento cuando compartimos un momento. Cada vez tengo más ganas de conocerte, de saber qué te hace sonreír y de descubrir todas esas cosas que te hacen ser tú.

No te escribo para presionarte ni para pedirte que me respondas algo que no sientes. Te escribo porque creo que mereces saber lo que pasa por mi corazón.

Naiverlyn, me gustas de una manera especial. Me estoy enamorando de ti y quería tener el valor de decírtelo en vez de guardar estas palabras para mí.

No puedo prometerte una historia perfecta, pero sí puedo ofrecerte sinceridad, respeto y la intención de demostrar con hechos lo que digo. Me gustaría que pudiéramos conocernos más, compartir momentos bonitos y ver, con calma, si nuestros sentimientos pueden crecer.

No sé qué nos traerá el futuro, y no quiero apresurar nada. Solo quería que supieras que eres alguien especial para mí y que lo que siento es real.

Con cariño, desde lo más sincero de mi corazón. ❤️`;

  let escribiendo = false;
  let escrituraTerminada = false;
  let temporizador = null;
  let indice = 0;

  function mostrarPantalla(id) {
    ["inicio", "declaracion", "final"].forEach((pantallaId) => {
      const pantalla = $(pantallaId);
      const activa = pantallaId === id;
      pantalla.hidden = !activa;
      pantalla.classList.toggle("activa", activa);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escribirDeclaracion() {
    if (escribiendo || escrituraTerminada) return;
    escribiendo = true;
    $("continuarBtn").classList.add("oculto");
    function paso() {
      if (indice < texto.length) {
        textoElemento.textContent += texto.charAt(indice);
        indice += 1;
        temporizador = window.setTimeout(paso, 22);
      } else {
        escribiendo = false;
        escrituraTerminada = true;
        $("continuarBtn").classList.remove("oculto");
      }
    }
    paso();
  }

  $("comenzarBtn").addEventListener("click", () => {
    mostrarPantalla("declaracion");
    if (music) {
      music.volume = 0.35;
      music.play().catch(() => {
        // La carta funciona aunque no exista musica.mp3 o el navegador bloquee el audio.
      });
    }
    escribirDeclaracion();
  });

  $("continuarBtn").addEventListener("click", () => mostrarPantalla("final"));

  $("siBtn").addEventListener("click", () => {
    $("respuestaTexto").textContent = "Gracias por darme esta oportunidad. ❤️ Me gustaría que avancemos con sinceridad y a nuestro ritmo.";
    for (let i = 0; i < 24; i++) {
      window.setTimeout(crearCorazon, i * 90);
    }
  });

  $("pensarloBtn").addEventListener("click", () => {
    $("respuestaTexto").textContent = "Claro, tómate tu tiempo. No tienes que responder ahora; respeto lo que sientas. ❤️";
  });

  $("noBtn").addEventListener("click", () => {
    $("respuestaTexto").textContent = "Gracias por ser sincera conmigo. Respeto tus sentimientos y no quiero que te sientas presionada. ❤️";
  });

  // Un toque en el fondo crea un pequeño corazón decorativo, sin bloquear botones.
  document.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "♡";
    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.bottom = "auto";
    heart.style.animationDuration = "4s";
    heartsContainer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 4500);
  });
})();