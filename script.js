/* =========================
   DATOS GENERALES
========================== */

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];


/* =========================
   INFORMACIÓN DE FUNCIONES
========================== */

const funciones = {

    lineal: {
        titulo: "Función lineal",
        tipo: "Algebraica",
        ecuacion: "f(x) = mx + b",
        descripcion:
            "Relaciona dos variables mediante una tasa de cambio constante. Su gráfica es una línea recta.",
        ejemplo:
            "Ejemplo: f(x) = 2x + 3",
        aplicacion:
            "Puede representar situaciones donde una cantidad aumenta o disminuye de manera constante."
    },

    cuadratica: {
        titulo: "Función cuadrática",
        tipo: "Algebraica",
        ecuacion: "f(x) = ax² + bx + c",
        descripcion:
            "Es una función polinómica de segundo grado. Su gráfica tiene forma de parábola.",
        ejemplo:
            "Ejemplo: f(x) = x² - 4x + 3",
        aplicacion:
            "Puede utilizarse para representar fenómenos donde el cambio se acelera o desacelera."
    },

    cubica: {
        titulo: "Función cúbica",
        tipo: "Algebraica",
        ecuacion: "f(x) = ax³ + bx² + cx + d",
        descripcion:
            "Es una función polinómica de tercer grado. Puede presentar cambios de crecimiento y decrecimiento.",
        ejemplo:
            "Ejemplo: f(x) = x³ - 2x",
        aplicacion:
            "Sirve para modelar comportamientos más complejos que no pueden representarse con una recta o parábola."
    },

    racional: {
        titulo: "Función racional",
        tipo: "Algebraica",
        ecuacion: "f(x) = p(x) / q(x)",
        descripcion:
            "Es una función formada por el cociente entre dos expresiones algebraicas.",
        ejemplo:
            "Ejemplo: f(x) = 1 / x",
        aplicacion:
            "Puede representar relaciones donde una cantidad depende inversamente de otra."
    },

    exponencial: {
        titulo: "Función exponencial",
        tipo: "Trascendental",
        ecuacion: "f(x) = a · bˣ",
        descripcion:
            "Representa procesos donde una cantidad crece o disminuye proporcionalmente a su propio valor.",
        ejemplo:
            "Ejemplo: f(x) = 2ˣ",
        aplicacion:
            "Puede utilizarse para estudiar crecimiento poblacional, propagación o procesos de acumulación."
    },

    logaritmica: {
        titulo: "Función logarítmica",
        tipo: "Trascendental",
        ecuacion: "f(x) = logᵦ(x)",
        descripcion:
            "Es la función inversa de una función exponencial. Crece lentamente a medida que aumenta x.",
        ejemplo:
            "Ejemplo: f(x) = log₂(x)",
        aplicacion:
            "Puede utilizarse para analizar escalas y fenómenos donde el crecimiento se desacelera."
    },

    trigonometrica: {
        titulo: "Función trigonométrica",
        tipo: "Trascendental",
        ecuacion: "f(x) = A · sen(Bx + C)",
        descripcion:
            "Representa fenómenos que se repiten de manera periódica.",
        ejemplo:
            "Ejemplo: f(x) = 23 + sen(x)",
        aplicacion:
            "Es especialmente útil para representar ciclos naturales como temperatura, estaciones y otros fenómenos periódicos."
    }

};


/* =========================
   MOSTRAR INFORMACIÓN
========================== */

function mostrarFuncion(nombre) {

    const info = funciones[nombre];

    const contenedor = document.getElementById("infoFuncion");

    if (!info || !contenedor) {
        return;
    }


    contenedor.innerHTML = `

        <div class="info-contenido">

            <span class="mini-etiqueta">
                ${info.tipo.toUpperCase()}
            </span>

            <h3>
                ${info.titulo}
            </h3>

            <div class="info-formula">
                ${info.ecuacion}
            </div>

            <p>
                ${info.descripcion}
            </p>

            <div class="info-detalles">

                <div>
                    <strong>Ejemplo</strong>
                    <span>${info.ejemplo}</span>
                </div>

                <div>
                    <strong>Aplicación</strong>
                    <span>${info.aplicacion}</span>
                </div>

            </div>

        </div>

    `;


    const tarjetas =
        document.querySelectorAll(".funcion-card");


    tarjetas.forEach((tarjeta) => {

        tarjeta.classList.remove("activa");

    });


    const tarjetaSeleccionada =
        [...tarjetas].find((tarjeta) =>
            tarjeta.getAttribute("onclick")?.includes(nombre)
        );


    if (tarjetaSeleccionada) {

        tarjetaSeleccionada.classList.add("activa");

    }

}


/* =========================
   DATOS DE RESIDUOS 2024
========================== */

const residuos2024 = [
    27168.14,
    26412.20,
    26443.30,
    26948.17,
    27394.67,
    27548.47,
    27878.75,
    28555.47,
    28414.69,
    28702.61,
    29848.49,
    30184.60
];


/* =========================
   DATOS DE TEMPERATURA
   REFERENCIA HISTÓRICA
========================== */

const temperaturas = [
    23.1,
    23.3,
    23.4,
    23.3,
    23.2,
    23.2,
    23.1,
    23.2,
    23.0,
    22.6,
    22.6,
    22.8
];


/* =========================
   MODELO DE RESIDUOS
========================== */

function modeloResiduos(x) {

    return (
        28.06905095 * Math.pow(x, 2)
        - 46.47766234 * x
        \+ 26739.99454545
    );

}


/* =========================
   MODELO DE TEMPERATURA
========================== */

function modeloTemperatura(x) {

    const angulo = (2 * Math.PI * x) / 12;

    return (
        23.067
        \+ 0.232 * Math.sin(angulo)
        - 0.203 * Math.cos(angulo)
    );

}


/* =========================
   GRÁFICA DE RESIDUOS
========================== */

let graficaResiduos;


function crearGraficaResiduos() {

    const canvas =
        document.getElementById("graficaResiduos");


    if (!canvas) {
        return;
    }


    const ctx = canvas.getContext("2d");


    graficaResiduos = new Chart(ctx, {

        type: "line",

        data: {

            labels: meses,

            datasets: [

                {
                    label: "Residuos reales 2024",

                    data: residuos2024,

                    borderWidth: 3,

                    pointRadius: 5,

                    tension: 0.3
                },

                {
                    label: "Modelo cuadrático",

                    data: meses.map((_, i) =>
                        modeloResiduos(i + 1)
                    ),

                    borderWidth: 2,

                    borderDash: [6, 6],

                    pointRadius: 0,

                    tension: 0.3
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: true,

            interaction: {
                mode: "index",
                intersect: false
            },

            plugins: {

                legend: {
                    display: true
                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            return (
                                context.dataset.label
                                + ": "
                                + Number(context.raw)
                                    .toLocaleString("es-CO", {
                                        maximumFractionDigits: 2
                                    })
                                + " toneladas"
                            );

                        }

                    }

                }

            },

            scales: {

                y: {

                    beginAtZero: false,

                    title: {
                        display: true,
                        text: "Toneladas"
                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Mes"
                    }

                }

            }

        }

    });

}


/* =========================
   GRÁFICA DE TEMPERATURA
========================== */

let graficaTemperatura;


function crearGraficaTemperatura() {

    const canvas =
        document.getElementById("graficaTemperatura");


    if (!canvas) {
        return;
    }


    const ctx = canvas.getContext("2d");


    graficaTemperatura = new Chart(ctx, {

        type: "line",

        data: {

            labels: meses,

            datasets: [

                {
                    label: "Temperatura histórica",

                    data: temperaturas,

                    borderWidth: 3,

                    pointRadius: 5,

                    tension: 0.35
                },

                {
                    label: "Modelo trigonométrico",

                    data: meses.map((_, i) =>
                        modeloTemperatura(i + 1)
                    ),

                    borderWidth: 2,

                    borderDash: [6, 6],

                    pointRadius: 0,

                    tension: 0.35
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: true,

            interaction: {
                mode: "index",
                intersect: false
            },

            plugins: {

                legend: {
                    display: true
                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            return (
                                context.dataset.label
                                + ": "
                                + Number(context.raw)
                                    .toLocaleString("es-CO", {
                                        minimumFractionDigits: 1,
                                        maximumFractionDigits: 2
                                    })
                                + " °C"
                            );

                        }

                    }

                }

            },

            scales: {

                y: {

                    title: {
                        display: true,
                        text: "Temperatura (°C)"
                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Mes"
                    }

                }

            }

        }

    });

}


/* =========================
   LABORATORIO DE RESIDUOS
========================== */

function configurarSliderResiduos() {

    const slider =
        document.getElementById("sliderResiduos");

    const numero =
        document.getElementById("numeroMesResiduo");

    const nombre =
        document.getElementById("mesResiduo");

    const valor =
        document.getElementById("valorResiduo");


    if (!slider) {
        return;
    }


    function actualizar() {

        const mes = Number(slider.value);

        numero.textContent = mes;

        nombre.textContent = meses[mes - 1];


        const dato = residuos2024[mes - 1];


        valor.textContent =
            dato.toLocaleString("es-CO", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

    }


    slider.addEventListener("input", actualizar);


    actualizar();

}


/* =========================
   LABORATORIO DE TEMPERATURA
========================== */

function configurarSliderTemperatura() {

    const slider =
        document.getElementById("sliderTemperatura");

    const numero =
        document.getElementById("numeroMesTemperatura");

    const nombre =
        document.getElementById("mesTemperatura");

    const valor =
        document.getElementById("valorTemperatura");


    if (!slider) {
        return;
    }


    function actualizar() {

        const mes = Number(slider.value);

        numero.textContent = mes;

        nombre.textContent = meses[mes - 1];


        const temperatura =
            temperaturas[mes - 1];


        valor.textContent =
            temperatura.toLocaleString("es-CO", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
            });

    }


    slider.addEventListener("input", actualizar);


    actualizar();

}


/* =========================
   MODO OSCURO
========================== */

function configurarModoOscuro() {

    const boton =
        document.getElementById("modoBtn");


    if (!boton) {
        return;
    }


    const modoGuardado =
        localStorage.getItem("modoOscuro");


    if (modoGuardado === "activo") {

        document.body.classList.add("oscuro");

        boton.textContent = "☀️";

    }


    boton.addEventListener("click", () => {

        document.body.classList.toggle("oscuro");


        const oscuro =
            document.body.classList.contains("oscuro");


        if (oscuro) {

            boton.textContent = "☀️";

            localStorage.setItem(
                "modoOscuro",
                "activo"
            );

        } else {

            boton.textContent = "🌙";

            localStorage.setItem(
                "modoOscuro",
                "inactivo"
            );

        }

    });

}


/* =========================
   ANIMACIÓN AL HACER SCROLL
========================== */

function configurarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".card-intro, .funcion-card, .calculo-card, .accion-card, .lab-card, .fuente-card"
        );


    const observador =
        new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    elementos.forEach((elemento) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(25px)";

        elemento.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observador.observe(elemento);

    });

}


/* =========================
   INICIO
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        crearGraficaResiduos();

        crearGraficaTemperatura();

        configurarSliderResiduos();

        configurarSliderTemperatura();

        configurarModoOscuro();

        configurarAnimaciones();

    }
);