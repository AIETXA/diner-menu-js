

const horaActual = moment().format('HH:mm');

console.log("Hola la hora detectada es:", horaActual)

let menuBreakfast = { 
    clasicos: {
        'Café/Té + Tostadas clásicas (mantequilla y mermelada)': 3.80,
        'Café/Té + Bolleria': 3.50,
        'Yogurt con avena, miel y banana': 4.0
    },
    extras: {
        'Matcha': 2.50,
        'Zumo de naranja natural': 4.0
    }

};


let menuLunch = {
    entrantes: {
        'Ensaladilla Rusa': 6.50,
        'Ensalada Mixta': 8.5,
        'Calamares': 7.0
    },
    primero: {
        'Crema de verduras': 5.0,
        'Lengua rebosada con pimientos rojos': 7,
        'Lubina con verduritas': 7.50
    },
    extras: {
        'Alioli': 1.0,
        'Pan': 1.0
    }
};

let menuDinner = {
    entrantes : {
        'Panaché de verduras': 7.5,
        'Chorizo frito': 6.0,
        'Chipis plancha': 8.0
    },

    primero: {
        'Escalope de ternera con papas panaderas': 15.0,
        'Pechuga de pollo grillada con verduras': 15.0,
        'Revuelto de hongos': 13.0
    },
    extras : {
        'Pan': 1.2,
        'Pimientos piquillo': 1.5
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

