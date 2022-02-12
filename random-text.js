let stage1 = document.getElementById("stage1");
let stage2 = document.getElementById("stage2");
let maximumInput = document.getElementById("maximum");
let startButton = document.getElementById("start");
let guessInput = document.getElementById("guess-number");
let guessButton = document.getElementById("guess-button");
let chanceSpan = document.getElementById("chances");
let maximumNumber, totalChances, targetNumber;
startButton.addEventListener("click", startGame);

function startGame() {
    maximumNumber = Number(maximumInput.value);
    if (maximumNumber > 10) {
        targetNumber = Math.floor(Math.random() * (maximumNumber + 1))
        totalChances = Math.floor(Math.log2(maximumNumber) + 1)
        chanceSpan.textContent = totalChances;
        stage1.classList.toggle('hidden')
        stage2.classList.toggle('hidden')
    } else if (maximumNumber <= 10) {
        let p = document.querySelector("p")
        p.outerHTML = '<p class="red">عدد وارد شده باید بزرگ تر از ۱۰ باشد</p>'
    } else {
        let p = document.querySelector("p")
        p.outerHTML = '<p class="red">عدد وارد کنید</p>'
    }
}

guessButton.addEventListener("click", guess);

function guess() {
    let yourGuess = Number(guessInput.value);

    if (yourGuess === targetNumber) {
        stage2.innerHTML = '<p class="blue">شما برنده شده اید</p>';
        return;
    } else if (yourGuess > targetNumber) {
        const status = document.getElementById("status");
        status.innerHTML += `<span class="red">${yourGuess}-</span>`
    }
    else {
        const status = document.getElementById("status");
        status.innerHTML += `<span class="blue">${yourGuess}-</span>`
    }


    let remainChances = chanceSpan.textContent;
    remainChances--
    if (typeof Number && remainChances > 0) {
        chanceSpan.textContent = remainChances;
    } else {
        stage2.innerHTML = '<p class="red">شما باختید</p>'
    }
}