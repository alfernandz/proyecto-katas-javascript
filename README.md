# 🚀 Proyecto Katas de JavaScript

Colección de ejercicios prácticos (*katas*) desarrollados para consolidar y poner a prueba distintas funcionalidades de **JavaScript**, abarcando desde los fundamentos básicos del lenguaje hasta la manipulación dinámica del DOM, métodos avanzados de ES6+ y el consumo de APIs de forma asíncrona.

---

## 📁 Estructura del Proyecto

El repositorio está organizado en tres bloques temáticos principales según el área de aprendizaje:

```text
proyecto-katas-javascript/
│
├── 📂 DOM/                         # Selección, creación, modificación y eventos en el DOM
│   ├── 📁 Ejercicio 1 DOM/         # Selectores (querySelector, querySelectorAll, data-attributes)
│   ├── 📁 Ejercicio 2 DOM/         # Creación e inserción dinámica de nodos (createElement, appendChild)
│   ├── 📁 Ejercicio 3 DOM/         # Renderizado de listas desde arrays y eliminación de elementos
│   ├── 📁 Ejercicio 4 DOM/         # Gestión de eventos (click, focus, input)
│   └── 📁 Ejercicio 5 DOM/         # Maquetación dinámica combinando JS y CSS
│
├── 📂 Ejercicios JS/               # Fundamentos de programación en JavaScript
│   ├── 📄 Ejercicio1.js            # Variables, tipos de datos y Template Literals
│   ├── 📄 Ejercicio2.js
│   └── 📄 ... (hasta Ejercicio16+) # Condicionales, bucles, funciones y lógica básica
│
├── 📂 ES6+ Asincronía/             # JavaScript moderno y peticiones HTTP
│   ├── 📄 Ejercicio1.js - 7.js     # Métodos de arrays (.filter, .reduce, .find), arrow functions, etc.
│   ├── 📁 Ejercicio5/
│   ├── 📁 Ejercicio8/
│   └── 📁 Ejercicio9/              # Consumo de la PokéAPI con async/await y fetch
│
└── 📄 README.md                    # Documentación del proyecto
```

---

## 📚 Contenido por Módulos

### 1. Fundamentos de JavaScript (`Ejercicios JS/`)
Scripts independientes centrados en la lógica base del lenguaje:
* Declaración y uso de variables (`let`, `const`) y operadores aritméticos.
* Interpolación de cadenas mediante *Template Literals* (`` `...` ``).
* Estructuras de control, iteraciones, funciones y manejo de colecciones básicas.

### 2. Manipulación del DOM y Eventos (`DOM/`)
Ejercicios acompañados de su propio `index.html` (y hojas de estilo en los ejercicios avanzados) para interactuar con el navegador:
* **Selección de elementos:** Uso de `querySelector` y `querySelectorAll` por etiquetas, clases, IDs y atributos personalizados (`data-*`).
* **Creación y borrado dinámico:** Generación de nodos HTML con `document.createElement`, `appendChild`, modificación de texto con `textContent` y eliminación con `.remove()`.
* **Eventos del usuario:** Escucha y manejo de eventos interactivos (`click`, `focus`, `input`) mediante `addEventListener`.

### 3. ES6+ y Programación Asíncrona (`ES6+ Asincronía/`)
Prácticas enfocadas en características modernas de ECMAScript y comunicación con servicios externos:
* **Programación funcional con Arrays:** Filtrado, búsqueda y acumulación de datos complejos utilizando `.filter()`, `.find()` y `.reduce()`.
* **Asincronía y APIs:** Uso de funciones `async/await`, bloques `try/catch` y `fetch` para consultar datos en tiempo real desde la **PokéAPI** y renderizar resultados de forma dinámica en el HTML.

---

## 🛠️ Tecnologías Utilizadas

* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Fetch API / PokéAPI** (para prácticas de asincronía)

---

## ⚙️ Cómo ejecutar los ejercicios

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/alfernandz/proyecto-katas-javascript.git
   ```

2. **Para ejercicios de consola (`.js` independientes):**
   Puedes ejecutarlos directamente en tu terminal si tienes [Node.js](https://nodejs.org/) instalado:
   ```bash
   node "Ejercicios JS/Ejercicio1.js"
   ```

3. **Para ejercicios con interfaz web (`DOM/` y ejercicios con `index.html`):**
   * Abre la carpeta del proyecto en **Visual Studio Code**.
   * Haz clic derecho sobre el archivo `index.html` del ejercicio correspondiente y selecciona **Open with Live Server** (o ábrelo directamente en tu navegador).
   * Abre las **Herramientas de Desarrollador** (`F12` -> pestaña *Console*) para visualizar los resultados impresos por consola.

---

## 👤 Autor

* **Alejandro Fernández** – [@alfernandz](https://github.com/alfernandz)