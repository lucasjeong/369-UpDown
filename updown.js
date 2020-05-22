const range = 100;
const answer = Math.ceil(Math.random() * range);
console.log(answer);

const inputTag = document.getElementById("input");
const resultDiv = document.getElementById("result");
const formBtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt");

let life = 5;
formBtn.onclick = (event) => {
    life -= 1;
    const userInput = Number(inputTag.value)
    const result = document.createElement('h2');
    result.textContent = userInput + " -> ";

    if (userInput === answer) {
        result.textcontext += "Answer";
        alert("You are correct!");
    }
    else {
        if (life > 0) {
            event.preventDefault();
            (userInput > answer) ? (result.textContent += "Down"):(result.textContent += "Up") 
            inputTag.focus();
        }
    }
    resultDiv.append(result);
    inputTag.value = ' ';
    displayLife.textContent = "💖".repeat(life) + "💔".repeat(5 - life);
    if(life === 0) alert("You failed!\nThe answer is " + answer);
}