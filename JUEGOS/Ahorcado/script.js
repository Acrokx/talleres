// Lista de palabras para el juego
const words = ['python', 'javascript', 'vscode', 'desarrollador', 'algoritmo', 'programacion'];

// Variables del juego
let chosenWord;
let guessedLetters = [];
let attemptsLeft = 6;
let gameOver = false;

// Elementos del DOM
const wordDisplay = document.getElementById('word-display');
const attemptsLeftDisplay = document.getElementById('attempts-left');
const message = document.getElementById('game-message');
const resetButton = document.getElementById('reset-button');
const lettersContainer = document.getElementById('letters');

// Función para iniciar el juego
function startGame() {
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
    document.getElementById('game-message').style.display = 'none';
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
            document.getElementById('game-message').style.display = 'block';
            resetButton.style.display = 'inline-block';
        }
    }

    // Comprobar si el jugador ha ganado
    const spans = wordDisplay.querySelectorAll('span');
    if (![...spans].some(span => span.textContent === '_')) {
        gameOver = true;
        message.textContent = `¡Felicidades! Has adivinado la palabra: ${chosenWord}`;
        document.getElementById('game-message').style.display = 'block';
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

    const hangmanImage = document.getElementById('hangman-image');
    hangmanImage.textContent = hangmanImages[6 - attemptsLeft];
}

// Iniciar el juego al cargar la página
window.onload = startGame;
