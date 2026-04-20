const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
const RPaddle = document.createElement('div')
document.body.appendChild(RPaddle)
const Score1 = document.createElement('div')
document.body.appendChild(Score1)
const Score2 = document.createElement('div')
document.body.appendChild(Score2)
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const ballRadius = 30
let LPaddleWidth = 20
let LPaddleHeight = 200
let LPaddleSpeed = 10
let LPaddleYPosition = windowHeight/2 - ballRadius
let LPaddleXPosition = 50
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let RPaddleWidth = 20
let RPaddleHeight = 200
let RPaddleSpeed = 10
let RPaddleYPosition = windowHeight/2 - ballRadius
let RPaddleXPosition = windowWidth - 50 - RPaddleWidth
let P1Score = 0
let P2Score = 0

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth
    let RPaddleTop = RPaddleYPosition
    let RPaddleBottom = RPaddleYPosition + RPaddleHeight
    let RPaddleLeft = windowWidth - 50 - RPaddleWidth
    let ballRight = ballXPosition + 2 * ballRadius

    if (ballXPosition > windowWidth - 2 * ballRadius || ballXPosition < 0){
        ballXDirection = ballXDirection * -1
    }
    if (ballYPosition > windowHeight - 2 * ballRadius || ballYPosition < 0){
        ballYDirection = ballYDirection * -1
    }

    if(
        (ballXPosition <= LPaddleRight) &&
        (ballRight >= LPaddleXPosition) &&
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballXDirection == -1)){
            ballXDirection = ballXDirection * -1
            IncreaseP1Score()
        }

     if(
        (ballRight >= RPaddleXPosition) &&
        (ballXPosition <= RPaddleXPosition + RPaddleWidth) &&
        (ballBottom >= RPaddleTop) &&
        (ballTop <= RPaddleBottom) &&
        (ballXDirection == 1)){
            ballXDirection = ballXDirection * -1
            IncreaseP2Score()
        }

}



createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${windowWidth/2 - ballRadius}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = "blue"
    LPaddle.style.position = "Absolute"
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${windowHeight / 2 - LPaddleHeight / 2}px`
}

createRPaddle()
function createRPaddle() {
    RPaddle.style.height = `${RPaddleHeight}px`
    RPaddle.style.width = `${RPaddleWidth}px`
    RPaddle.style.backgroundColor = "blue"
    RPaddle.style.position = "Absolute"
    RPaddle.style.left = `${RPaddleXPosition}px`
    RPaddle.style.top = `${windowHeight / 2 - RPaddleHeight / 2}px`
}

createScore1()
function createScore1() {
    Score1.style.height = "35px"
    Score1.style.width = "80px"
    Score1.style.background = "#ffffff"
    Score1.style.position = "absolute"
    Score1.style.text = P1Score
    Score1.style.left = "600px"
    Score1.style.top = "10px"
    Score1.style.fontsize = "30px"
    Score1.innerHTML = `Player 1 Score: ${P1Score}`

}

createScore2()
function createScore2() {
    Score2.style.height = "35px"
    Score2.style.width = "80px"
    Score2.style.background = "#ffffff"
    Score2.style.position = "absolute"
    Score2.style.right = "600px"
    Score2.style.top = "10px"
    Score2.style.fontsize = "30px"
    Score2.innerHTML = `Player 2 Score: ${P2Score}`

}

function IncreaseP1Score()
{
    P1Score = P1Score + 1
    Score1.innerHTML = `Player 1 Score: ${P1Score}`
}

function IncreaseP2Score()
{
    P2Score = P2Score + 1
    Score2.innerHTML = `Player 2 Score: ${P2Score}`
}
wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})



moveLPaddle()
function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

oKey = false
lKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'o') {
        oKey = true
    }
    if (event.key == 'l') {
        lKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'o') {
        oKey = false
    }
    if (event.key == 'l') {
        lKey = false
    }
})

moveRPaddle()
function moveRPaddle() {
    if (oKey == true && RPaddleYPosition > 0) {
        RPaddleYPosition = RPaddleYPosition - RPaddleSpeed
    }
    if (lKey == true && RPaddleYPosition < windowHeight - RPaddleHeight) {
        RPaddleYPosition = RPaddleYPosition + RPaddleSpeed
    }
    RPaddle.style.top = `${RPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    moveRPaddle()
    requestAnimationFrame(animate)
}
animate()
