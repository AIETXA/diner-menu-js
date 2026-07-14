//logica hora

let horaActual = '';
let horaValida = false;
const formatoHora = /^([01]\d|2[0-3]):([0-5]\d)$/;


//mis menus

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
    },
    postres: {
        'Flan':3.0,
        'Yogurt': 2.0,
        'Sorbete': 2.8
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
    },
    postres: {
        'Flan': 3.5,
        'Yogurt': 2.5,
        'Sorbete': 3.2
    }
};

let menuCerrado = {
    cerrado: {
        'Lo sentimos, la cocina está cerrada en este momento. ¡Vuelve más tarde!': 0
    }
};

//entrada hora para ver menu

while (horaValida === false) {
    let entradaHora = prompt("¡Bienvenido@ a Bottega Dinner!\n\nPor favor, introduce la hora actual para poder ofrecerte el menú correcto.\nFormato: HH:mm (Ejemplo: 14:30 o 08:15)")

    if(!entradaHora) {
        alert('Es necesario que introduzca una hora para poder continuar');
        continue;
    }

    let entradaLimpia = entradaHora.trim();

    if(formatoHora.test(entradaLimpia)) {
        horaActual = entradaLimpia;
        horaValida = true;
    } else {
        alert('Formato de hora no válida. Recuerda usar el formato correcto')
    }

}

let menuActivo;
let momentoDelDia = '';

if(horaActual >= '07:00' && horaActual <= '11:00') {
    menuActivo = menuBreakfast;
    momentoDelDia = 'DESAYUNO';
} else if (horaActual >= '12:00' && horaActual <= '16:00') {
    menuActivo = menuLunch;
    momentoDelDia = 'ALMUERZO';
} else if (horaActual >= '20:00' && horaActual <= '23:00') {
    menuActivo = menuDinner;
    momentoDelDia = 'CENA';
} else {
    menuActivo = menuCerrado;
    momentoDelDia = 'FUERA DE SERVICIO';
};

console.log(`[Sistema] El cliente introdujo la hora: ${horaActual}. Cargando menú de: ${momentoDelDia}`);



let textoMenu = `--- MENÚ ${momentoDelDia}---\n\n\n`;
let mapaPlatos = {};
let contadorPlatos = 1;

for(let seccion in menuActivo) {

    textoMenu += `=== ${seccion.toUpperCase()} ===\n`;

    for(let plato in menuActivo[seccion]) {
        let precio = menuActivo[seccion][plato];
        textoMenu += `[${contadorPlatos}] ${plato}: ${precio}€\n`;

        mapaPlatos[contadorPlatos] = {
            nombre: plato,
            precio: precio
        };
        
        contadorPlatos++;
    }
   
}

textoMenu += '\n\n¿Qué te apetece comer hoy?\n\nIntroduce los NÚMEROS de tus opciones separados por comas (Ejemplo: 1, 4, 9):';

//comentarios camarera

const comentariosCamarera = [
    '¡Excelente elección! De los preferidos de los clientes',
    '¡Marchando una! Es el especial del chef',
    '¡Buena elección! El día lo amerita',
    '¡Perfecto! Segundo que te va a encantar'
]


//control de errores

if (momentoDelDia === 'FUERA DE SERVICIO') {
    alert("--- BOTTEGA DINNER ---\n\nActualmente estamos fuera de servicio.\n\nNuestro horario es:\n• Desayunos: 07:00 a 11:00\n• Almuerzos: 12:00 a 16:00\n• Cenas: 20:00 a 23:00\n\n¡Gracias por tu visita!");
} else {

    let platosElegidos = [];
    let esPlatoValido = false;
    let precioTotal = 0;


while(esPlatoValido === false) {
    let entrada = prompt(textoMenu);

    if(!entrada) {
        alert('Por favor elige una opción para que podamos atenderte');
        continue;
    }

    let selecciones = entrada.split(',').map(num => num.trim());

    platosElegidos = [];
    precioTotal = 0;
    let todoOk = true;

    for(let seleccion of selecciones) {
        if(seleccion === '') continue;
    
    if (mapaPlatos[seleccion] !== undefined) {
       platosElegidos.push(mapaPlatos[seleccion].nombre);
                precioTotal += mapaPlatos[seleccion].precio;
            } else {
                todoOk = false;
                alert(`Lo siento, la opción ${seleccion} no está en el menu. Elige otra opción`)
                break;
            }
    }

    if(todoOk && platosElegidos.length > 0) {
        esPlatoValido = true;
    }
}
const indiceAleatorio = Math.floor(Math.random() * comentariosCamarera.length);
const comentarioElegido = comentariosCamarera[indiceAleatorio];

let listaPedidoTexto = platosElegidos.map(plato => `• ${plato}`).join('\n');
alert(`${comentarioElegido}`)

console.log('El cliente ha elegido:', platosElegidos);
console.log('Precio:', precioTotal);
}