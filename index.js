const secretWord = 'namoro';
let guessedWord = Array(secretWord.length).fill('_');
let attempts = 6;

document.getElementById('guess-button').addEventListener('click', () => {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';

    if (guess.length !== 1) {
        alert('Por favor, digite apenas uma letra.');
        return;
    }

    let correctGuess = false;
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
            guessedWord[i] = guess;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attempts--;
    }

    document.getElementById('word-display').innerText = guessedWord.join(' ');

    if (guessedWord.join('') === secretWord) {
        document.getElementById('message').innerText = 'Parabéns! Você adivinhou a palavra!';
        document.getElementById('final-message').classList.remove('hidden');
    } else if (attempts === 0) {
        document.getElementById('message').innerText = 'Suas tentativas acabaram! Mas não se preocupe, aqui está a mensagem especial:';
        document.getElementById('final-message').classList.remove('hidden');
    } else {
        document.getElementById('message').innerText = `Você tem mais ${attempts} tentativas.`;
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️'
        
        // Define a posição inicial do coração
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        document.body.appendChild(heart);
        
        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000); // Tempo correspondente ao tempo da animação
    }

    // Cria novos corações em intervalos regulares
    setInterval(createHeart, 300);
});
