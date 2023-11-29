

// Array vuoto per le bombe
let bombs = [];

// Variabile per la scelta del livello di difficoltà da parte dell'utente
let userChoice;

// Variabile per il numero massimo di celle in base al livello di difficoltà
let squareNumber;

// Seleziono l'elemento con id "grid"
var container = document.getElementById("grid");

// Seleziono il pulsante "play"
var playButton = document.getElementById("playButton");

// Funzione per aggiungere la classe "boom" se il numero è presente nell'array delle bombe
function addBoomClass(square, number) {
    if (bombs.includes(number)) {
        square.classList.add("boom");
    }
}

// Aggiungo un event listener per l'evento "click" al pulsante "play"
playButton.addEventListener("click", function () {
    // Ottengo il valore del livello di difficoltà selezionato
    userChoice = document.getElementById("livelloDifficoltà").value;
    console.log("Livello di difficoltà selezionato:", userChoice);

    // Pulisco il contenuto precedente nel container
    container.innerHTML = "";

    // Genero le celle in base al livello di difficoltà selezionato
    if (userChoice === "beginner") {
        squareNumber = 100;
        console.log("Creazione per il livello beginner");
        for (var i = 1; i <= 100; i++) {
            var square = document.createElement("div");
            square.classList.add("square", "beginner");

            // Aggiungi la classe "clicked" e la classe "boom" quando l'utente clicca sul div.square
            square.addEventListener("click", (function (currentI) {
                return function () {
                    this.classList.add("clicked");
                    addBoomClass(this, currentI);
                };
            })(i));

            square.textContent = i;
            container.appendChild(square);
        }
    } else if (userChoice === "medium") {
        squareNumber = 81;
        console.log("Creazione per il livello medium");
        for (var i = 1; i <= 81; i++) {
            var square = document.createElement("div");
            square.classList.add("square", "medium");

            // Aggiungi la classe "clicked" e la classe "boom" quando l'utente clicca sul div.square
            square.addEventListener("click", (function (currentI) {
                return function () {
                    this.classList.add("clicked");
                    addBoomClass(this, currentI);
                };
            })(i));

            square.textContent = i;
            container.appendChild(square);
        }
    } else if (userChoice === "hard") {
        squareNumber = 49;
        console.log("Creazione per il livello hard");
        for (var i = 1; i <= 49; i++) {
            var square = document.createElement("div");
            square.classList.add("square", "hard");

            // Aggiungi la classe "clicked" e la classe "boom" quando l'utente clicca sul div.square
            square.addEventListener("click", (function (currentI) {
                return function () {
                    this.classList.add("clicked");
                    addBoomClass(this, currentI);
                };
            })(i));

            square.textContent = i;
            container.appendChild(square);
        }
    }

    // Pulisco l'array delle bombe
    bombs = [];

    // Genero 16 numeri casuali per le bombe
    for (let i = 0; i < 16; ) {
        let bombNumber = Math.floor(Math.random() * squareNumber) + 1;

        // Assicuro che il numero generato non sia già presente nell'array delle bombe
        if (!bombs.includes(bombNumber)) {
            bombs.push(bombNumber);
            console.log("Il mio array contiene:", bombs);
            i++; // Incremento solo quando aggiungo un numero valido
        } else {
            console.log("Numero duplicato, riprovo.");
        }
    }
});