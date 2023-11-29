// Seleziono l'elemento con id "grid"
var container = document.getElementById("grid");

// Seleziono il pulsante "play"
var playButton = document.getElementById("playButton");

// Aggiungo un event listener per l'evento "click" al pulsante "play"

playButton.addEventListener("click", function () {
    // Ottengo il valore del livello di difficoltà selezionato

    let userChoice = document.getElementById("livelloDifficoltà").value;

    console.log("Livello di difficoltà selezionato:", userChoice);

    // se la scelta dell'utente è beginner:

    // Tolgo tutto quello che c'era prima (se c'era) 

    container.innerHTML = "";

    if (userChoice === "beginner") {
        console.log("Creazione per il livello beginner");

        // creo 100 elementi div
        for (var i = 1; i <= 100; i++) {
            // Creazione di un nuovo elemento div
            var square = document.createElement("div");

            // Aggiungo delle classi "square" e "beginner"
            square.classList.add("square", "beginner");

            // Imposto del testo interno con il numero progressivo
            square.textContent = i;

            // Aggiungo l'elemento al container
            container.appendChild(square);
        }
    }

    // se la scelta dell'utente è medium:

    else if (userChoice === "medium") {
        console.log("Creazione per il livello medium");

        // tolgo tutti gli elementi precedenti 

        container.innerHTML = "";

        // creo 100 elementi div
        for (var i = 1; i <= 81; i++) {
            // Creazione di un nuovo elemento div
            var square = document.createElement("div");

            // Aggiungo delle classi "square" e "medium"
            square.classList.add("square", "medium");

            // Imposto del testo interno con il numero progressivo
            square.textContent = i;

            // Aggiungo l'elemento al container
            container.appendChild(square);
        }
    }

    // se la scelta dell'utente è hard:

    else if (userChoice === "hard") {
        console.log("Creazione per il livello hard");

        // Tolgo tutto... 

        container.innerHTML = "";

        // creo 100 elementi div
        for (var i = 1; i <= 49; i++) {
            // Creazione di un nuovo elemento div
            var square = document.createElement("div");

            // Aggiungo delle classi "square" e "hard"
            square.classList.add("square", "hard");

            // Imposto del testo interno con il numero progressivo
            square.textContent = i;

            // Aggiungo l'elemento al container
            container.appendChild(square);
        }
    }
});
