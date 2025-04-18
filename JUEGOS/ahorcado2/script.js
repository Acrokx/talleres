// Lista de palabras para el juego
const words = ['python', 'javascript', 'ahorcado', 'desarrollador', 'algoritmo', 'programacion'];

// Variables del juego
let chosenWord;
let guessedLetters = [];
let attemptsLeft = 6;
let gameOver = false;

// Elementos del DOM
const wordDisplay = document.getElementById('word-display');
const attemptsLeftDisplay = document.getElementById('attempts-left');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
const lettersContainer = document.getElementById('letters');
const hangmanImage = document.getElementById('hangman-image');
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');

// Función para iniciar el juego
function startGame() {
    // Mostrar la pantalla del juego y ocultar la de bienvenida
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // Resetear variables
    attemptsLeft = 6;
    guessedLetters = [];
    gameOver = false;
    chosenWord = words[Math.floor(Math.random() * words.length)];

    // Limpiar la pantalla
    wordDisplay.innerHTML = '';
    message.textContent = '';
    lettersContainer.innerHTML = '';
    attemptsLeftDisplay.textContent = attemptsLeft;

    // Mostrar las letras de la palabra oculta
    for (let i = 0; i < chosenWord.length; i++) {
        const span = document.createElement('span');
        span.textContent = '_';
        wordDisplay.appendChild(span);
    }

    // Crear los botones de letras
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = () => guessLetter(letter);
        lettersContainer.appendChild(button);
    });

    // Ocultar el mensaje de fin del juego y habilitar botones
    resetButton.style.display = 'none';
    message.style.display = 'none';
    hangmanImage.textContent = '';
}

// Función para adivinar una letra
function guessLetter(letter) {
    if (gameOver) return;

    if (guessedLetters.includes(letter)) {
        return; // La letra ya fue adivinada
    }

    guessedLetters.push(letter);
    const wordArray = chosenWord.split('');

    // Comprobar si la letra está en la palabra
    if (wordArray.includes(letter)) {
        // Mostrar las letras adivinadas correctamente
        const spans = wordDisplay.querySelectorAll('span');
        wordArray.forEach((letterInWord, index) => {
            if (letterInWord === letter) {
                spans[index].textContent = letter;
            }
        });
    } else {
        // Restar un intento fallido y actualizar la imagen del ahorcado
        attemptsLeft--;
        attemptsLeftDisplay.textContent = attemptsLeft;
        updateHangmanImage();

        // Verificar si se ha acabado el juego
        if (attemptsLeft === 0) {
            gameOver = true;
            message.textContent = `¡Perdiste! La palabra era: ${chosenWord}`;
            message.style.color = 'red';
            message.style.display = 'block';
            resetButton.style.display = 'inline-block';
        }
    }

    // Verificar si el jugador ha ganado (comprobar si todas las letras han sido adivinadas)
    checkForWin();
}

// Función para verificar si el jugador ha ganado
function checkForWin() {
    const spans = wordDisplay.querySelectorAll('span');
    let allGuessed = true;

    // Si alguna letra sigue siendo un '_', no ha sido adivinada
    spans.forEach(span => {
        if (span.textContent === '_') {
            allGuessed = false;
        }
    });

    if (allGuessed) {
        gameOver = true;
        message.textContent = `¡Felicidades! Has adivinado la palabra: ${chosenWord}`;
        message.style.color = 'green';
        message.style.display = 'block';
        resetButton.style.display = 'inline-block';
    }
}

// Actualizar la imagen del ahorcado
function updateHangmanImage() {
    const hangmanImages = [
        'O',
        'O\n|',
        'O\n|\\',
        'O\n|\\\n|',
        'O\n|\\\n|/\n|',
        'O\n|\\\n|/\\\n|',
    ];

    hangmanImage.textContent = hangmanImages[6 - attemptsLeft];
}

// Función para reiniciar el juego
resetButton.onclick = startGame;

// Iniciar el juego al cargar la página
window.onload = () => {
    welcomeScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
};
