console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mpeg")
let audioturn = new Audio("audioturn.mpeg")
let gameover = new Audio("gameover.mpeg")
let turn = "X"
let Gameover = false;

//Function to change the turns 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win 

const checkWin = () => {
    let Boxtext = document.getElementsByClassName('Boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((Boxtext[e[0]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[2]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = Boxtext[e[0]].innerText + " Won "
            Gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = ` translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }

    })
}

//Game Logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let Boxtext = element.querySelector('.Boxtext')
    element.addEventListener('click', () => {
        if (Boxtext.innerText === '') {
            Boxtext.innerText = turn
            turn = changeTurn();
            audioturn.play();
            music.play();
            gameover.play();
            checkWin();
            if (!Gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
            }
        }
    })
})

// Add onclick listener to reset button

reset.addEventListener('click', () => {
    let Boxtext = document.querySelectorAll('.Boxtext')
    Array.from(Boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    Gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vw"
})