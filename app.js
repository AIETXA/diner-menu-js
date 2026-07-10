

const horaActual = moment().format('HH:mm');

console.log("Hola la hora detectada es:", horaActual)

const menuLunch = {
    entrantes: {
        'Ensaladilla Rusa': 8.50,
        'Ensalada Mixta': 10.0,
        'Calamares': 9.0
    },
    extras: {
        'Alioli': 1.0,
        'Pan': 1.0
    }
};

const comentariosCamarera = [
    '¡Excelente elección! De los preferidos de los clientes',
    '¡Marchando una! Es el especial del chef',
    '¡Buena elección! El día lo amerita',
    '¡Perfecto! Segundo que te va a encantar'
]

let textoMenu = "---NUESTROS ENTRANTES---\n\n\n";

for(let plato in menuLunch.entrantes) {
    let precio = menuLunch.entrantes[plato];

    textoMenu += `• ${plato}: ${precio}€\n`;
}

textoMenu += "\n¿Qué te apetece comer hoy?";

//control de errores
let eleccionUsuario = '';
let esPlatoValido = false;
let precioPlato = 0;

while(esPlatoValido === false) {
    let entrada = prompt(textoMenu);

    if(!entrada) {
        alert('Por favor elige una opción para que podamos atenderte');
        continue;
    }

    let entradaLimpia = entrada.toLowerCase().trim();

    for(let plato in menuLunch.entrantes) {
        if(plato.toLowerCase() === entradaLimpia) {
            esPlatoValido = true;
            eleccionUsuario = plato;
            precioPlato = menuLunch.entrantes[plato];
            break;
        }
    }
    if(!esPlatoValido) {
        alert(`Lo siento, el plato ${entrada} no está en el menu. Elige otra opción`)
        }
    }

const indiceAleatorio = Math.floor(Math.random() * comentariosCamarera.length);
const comentarioElegido = comentariosCamarera[indiceAleatorio];

alert(`${comentarioElegido}`)

