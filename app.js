

const horaActual = moment().format('HH:mm');

console.log("Hola la hora detectada es:", horaActual)

const menuLunch = {
    entrantes: {
        'croquetas': 9.0,
        'rabas': 8.5,
        'pulpo': 20.0
    },
    extras: {
        'alioli': 1.0,
        'pan': 1.0
    }
};

console.log('El precio de la comida es:', menuLunch.entrantes['rabas']);