// Lista de palabras para el juego
const words = {
    easy: ['python', 'java', 'html', 'css'],
    medium: ['algoritmo', 'desarrollador', 'programacion'],
    hard: ['introspectivo', 'refactorizacion','programacionPOP', 'asintotico']
};

// Variables del juego
let chosenWord;
let guessedLetters = [];
let attemptsLeft = 6;
let gameOver = false;
let timeLeft = 60;
let timer;

// Elementos del DOM
const wordDisplay = document.getElementById('word-display');
const attemptsLeftDisplay = document.getElementById('attempts-left');
const message = document.getElementById('game-message');
const resetButton = document.getElementById('reset-button');
const exitButton = document.getElementById('exit-button');
const lettersContainer = document.getElementById('letters');
const hangmanImage = document.getElementById('hangman-image');
const timerDisplay = document.getElementById('timer');
const difficultySelect = document.getElementById('difficulty-select');
const startButton = document.getElementById('start-button');

// Sonidos
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const gameOverSound = document.getElementById('game-over-sound');

// Función para seleccionar la palabra según la dificultad
function selectWordBasedOnDifficulty() {
    const difficulty = difficultySelect.value;
    const wordList = words[difficulty];
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Función para iniciar el juego
function startGame() {
    chosenWord = selectWordBasedOnDifficulty();
    attemptsLeft = 6;
    guessedLetters = [];
    gameOver = false;
    timeLeft = 60;
    
    // Limpiar la pantalla
    wordDisplay.innerHTML = '';
    lettersContainer.innerHTML = '';
    attemptsLeftDisplay.textContent = attemptsLeft;
    message.classList.remove('show');
    exitButton.style.display = 'none';
    resetButton.style.display = 'none';

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

    // Iniciar el temporizador
    startTimer();
    showGameScreen();
}

// Función para mostrar la pantalla de juego
function showGameScreen() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
}

// Función para adivinar una letra
function guessLetter(letter) {
    if (gameOver) return;

    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);
    const wordArray = chosenWord.split('');

    if (wordArray.includes(letter)) {
        correctSound.play();
        const spans = wordDisplay.querySelectorAll('span');
        wordArray.forEach((letterInWord, index) => {
            if (letterInWord === letter) {
                spans[index].textContent = letter;
            }
        });
    } else {
        wrongSound.play();
        attemptsLeft--;
        attemptsLeftDisplay.textContent = attemptsLeft;
        updateHangmanImage();

        if (attemptsLeft === 0) {
            gameOverSound.play();
            gameOver = true;
            message.textContent = `¡Perdiste! La palabra era: ${chosenWord}`;
            message.style.color = 'red';
            showGameOverMessage();
        }
    }

    // Verificar si la palabra está completa
    const spans = wordDisplay.querySelectorAll('span');
    const isWordComplete = [...spans].every(span => span.textContent !== '_');

    if (isWordComplete) {
        gameOver = true;
        message.textContent = `¡Felicidades! Has adivinado la palabra: ${chosenWord}`;
        message.style.color = 'green';
        showGameOverMessage();
    }
}

// Función para mostrar el mensaje de fin de juego
function showGameOverMessage() {
    message.classList.add('show');
    resetButton.style.display = 'inline-block';
    exitButton.style.display = 'inline-block';
    clearInterval(timer); // Detener el temporizador
}

// Función para actualizar la imagen del ahorcado
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

// Función para iniciar el temporizador
function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Tiempo restante: ${timeLeft}s`;
        } else {
            clearInterval(timer);
            gameOver = true;
            message.textContent = `¡Se acabó el tiempo! La palabra era: ${chosenWord}`;
            message.style.color = 'red';
            showGameOverMessage();
        }
    }, 1000);
}

// Función para reiniciar el juego
resetButton.onclick = startGame;

// Función para salir del juego
exitButton.onclick = () => {
    window.location.reload(); // Recargar la página para iniciar nuevamente
};

// Iniciar el juego al cargar la página
startButton.onclick = startGame;
