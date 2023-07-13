const gamContainer = document.querySelector(".game-container")
const endGamContainer = document.querySelector(".end-game-container")
const pointEL = document.querySelector(".poinds")

const TOP = 40;
const BOTTOM = 40;
const BUGPASTE = 5;
const CREATEBUGTIMER = 3000;
const ENDGAME = 60000;
let POINTS = 0;

function startGame(){
    pointEL.innerHTML = POINTS;
    createBug()
    setInterval(() => {
        createBug()
    }, CREATEBUGTIMER);   
}

function endGame(){
    setTimeout(()=>{
        endGamContainer.style.visibility = "visible";
    }, ENDGAME)
}

function createBug() {
    const node = document.createElement(`div`);
    node.className = 'bug'
    const min = 100;
    const max = 700;
    let top = Math.floor(Math.random() * (max - min + 1)) + min;
    let left = Math.floor(Math.random() * (max - min + 1)) + min;

    node.style.top = top + `px`; // set the top offset
    node.style.left = left + `px`; // set the left offset

    gamContainer.appendChild(node)   
    moveBug(node)
    node.addEventListener('click', handleClick);
}

function moveBug(node) {

    setInterval(() => {
        let isTop = Math.random() < 0.5;
        let isBottom = Math.random() < 0.5;
        let nodeTopPositionValue = parseInt(node.style.top);
        let nodeLeftPositionValue = parseInt(node.style.left);
        let nodeTopPosition = isTop ? nodeTopPositionValue + BUGPASTE : nodeTopPositionValue - BUGPASTE;
        let nodeLeftPosition = isBottom ? nodeLeftPositionValue + BUGPASTE : nodeLeftPositionValue - BUGPASTE
        node.style.top = nodeTopPosition + `px`; // set the top offset
        node.style.left = nodeLeftPosition + `px`; // set the left offset
    }, 1000);

}

function handleClick(event) {
    event.target.remove();
    updatePoints()
}

function updatePoints(){
    POINTS = POINTS+1;
    pointEL.innerHTML = POINTS
}

function initGame() {
    startGame()
    endGame()
}

initGame()