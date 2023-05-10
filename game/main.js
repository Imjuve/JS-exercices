

const container = document.getElementById('container');
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const score = document.getElementById('score');



let randomWord = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
let textLetter = document.getElementsByClassName('textLetter');
let tab = [];


function init() {


    for (let i = 0; i < alphabet.length; i++) {
        const newDiv = document.createElement('div');

        newDiv.innerHTML = alphabet[i];
        newDiv.classList.add('letter');
        newDiv.setAttribute('onclick', 'checkLetter("' + alphabet[i] + '", this)');
        container.appendChild(newDiv);
    }

    for (let y = 0; y < randomWord.length; y++) {
        const letterZone = document.createElement('div');

        letterZone.innerHTML = "";
        letterZone.className = "textLetter";
        score.appendChild(letterZone);
        tab[y] = randomWord[y];
    }


}

let compteur = 0;
function checkLetter(n, letterElement) {
    let foundMatch = false;

    for (let i = 0; i < randomWord.length; i++) {
        if (n === randomWord[i]) {
            textLetter[i].innerHTML = n;
            foundMatch = true;
        }


    }
    if (!foundMatch) {
        letterElement.style.backgroundColor = "red";
        compteur++;
    }
    else {
        letterElement.style.backgroundColor = "green";
    }

    letterElement.removeAttribute('onclick');
    changeImg(compteur);
    winGame();
    setTimeout(loseGame, 2000);


}


function loseGame() {
    if (compteur >= 6) {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild)
        }
        reset();

    }

}
function reset() {
    const reset = document.createElement('button');
    reset.innerHTML = "Restart !"
    reset.setAttribute('onclick', 'goToURL("index.html")');
    document.body.appendChild(reset);
}
function goToURL(url) {
    window.location.assign(url);
}
function changeImg(val) {

    const img = document.querySelector('img');
    img.src = "images/p" + val + ".gif";

}

function winGame() {
    const divScore = document.getElementsByClassName('textLetter');
    let compteur = 0;
    for (let x = 0; x < randomWord.length; x++) {
        if (divScore[x].innerHTML === tab[x]) {
            compteur++;
        }
        if (compteur == randomWord.length) {
            setTimeout(function () {
                openModal();
            }, 1000);
        }

    }
}



// console.log(tab);
console.log(randomWord)