# 🍳 Bottega Dinner — Simulador de Comandas Inteligente

¡Bienvenido a **Bottega Dinner**! Este es un proyecto interactivo desarrollado en JavaScript que simula el sistema de toma de pedidos de un restaurante a través de la terminal del navegador.

He diseñado el flujo para que el restaurante se comporte de forma realista: se adapta al momento del día, genera la carta dinámicamente y permite hacer pedidos completos de una sola vez.

---

## 🚀 Enlaces del Proyecto

* **Demo interactiva en CodePen:** https://codepen.io/AIETXA/pen/dPNeNye
* **Repositorio en GitHub:** https://github.com/AIETXA/diner-menu-js

---

## 🌟 ¿Qué hace este proyecto? (Y cómo lo solucioné)

Para ir más allá de un menú básico de consola, estructuré el código en torno a tres pilares:

### 1. Gestión Horaria Dinámica (Desayuno, Almuerzo, Cena y Cerrado)
El programa no muestra siempre la misma carta. Al iniciar, pide la hora al usuario en formato `HH:mm` (ej. `14:30`) y, usando **Expresiones Regulares (RegEx)** para validar que el formato sea correcto, decide qué menú cargar:
* **Desayuno:** de 07:00 a 11:00.
* **Almuerzo:** de 12:00 a 16:00.
* **Cena:** de 20:00 a 23:00.
* **Fuera de Servicio:** Si el restaurante está cerrado, el sistema lo detecta con un `else`, muestra un aviso educado con los horarios de apertura y detiene el flujo de forma segura.

### 2. Generación Automática del Menú (Mapeo Numérico)
En lugar de escribir a mano los números de los platos en los objetos de datos, creé un **bucle anidado** que recorre las secciones del menú activo. 
* Genera la lista visual con un contador automático (`[1]`, `[2]`, `[3]...`).
* Guarda la relación de cada número con su plato y precio en un objeto dinámico llamado `mapaPlatos`. ¡Así el cliente solo tiene que teclear números!

### 3. Pedidos Múltiples de una Sola Vez (Separados por comas)
Para que la experiencia sea real y el usuario pueda pedir un menú completo (ej. entrante, principal y postre), implementé una lógica de procesamiento de texto:
* El cliente introduce los números separados por comas (ej: `1, 4, 9`).
* El programa limpia los espacios y divide la entrada con `.split(',')` y `.map()`.
* Valida uno a uno que todos los números existan. Si uno falla, avisa y pide reintroducir la comanda.
* Si todo es correcto, calcula el **precio total acumulado** y muestra el ticket desglosado en pantalla junto a un comentario aleatorio de la camarera.

---

## 🛠️ Tecnologías utilizadas

* **JavaScript (ES6):** Estructuras de datos (Objetos anidados), bucles (`while`, `for...in`, `for...of`), manipulación de arrays (`.map()`, `.split()`), y lógica condicional.
* **HTML5 & CSS3:** Estructura mínima de presentación y aplicación de tipografía personalizada.