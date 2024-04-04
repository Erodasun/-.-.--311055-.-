let secretNumber;
let attempts = 5;

function startGame() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Пожалуйста, введите корректные значения для минимального и максимального чисел.");
        return;
    }
    
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 5;
    playRound();
}

function playRound() {
    let guess = parseInt(prompt(`Угадайте число от ${document.getElementById("min").value} до ${document.getElementById("max").value}`));

    if (isNaN(guess) || guess < parseInt(document.getElementById("min").value) || guess > parseInt(document.getElementById("max").value)) {
        alert(`Пожалуйста, введите число от ${document.getElementById("min").value} до ${document.getElementById("max").value}`);
        playRound();
        return;
    }

    if (guess === secretNumber) {
        alert("Поздравляем! Вы угадали число!");
        return;
    } else {
        attempts--;
        if (attempts > 0) {
            let message = guess > secretNumber ? "Меньше" : "Больше";
            alert(`Неверно! ${message} загаданного числа. У вас осталось попыток: ${attempts}`);
            playRound();
        } else {
            let playAgain = confirm(`Игра окончена! Загаданное число было: ${secretNumber}. Хотите сыграть еще раз?`);
            if (playAgain) {
                startGame(); // Если пользователь хочет сыграть еще раз, вызываем функцию startGame снова
            }
            return;
        }
    }
}
