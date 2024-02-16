const BoardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame(){
    vBoard = [['','',''],['','',''],['','','']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    BoardRegions.forEach(function(element){
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handBoardClick)
    })
}

function disableRegion(element){
    element.style.cursor = 'default'
    element.removeEventListener('click', handBoardClick)
}

function handBoardClick(ev){
    const span =  ev.currentTarget
    const region = span.dataset.region
    const rowCollumPair = region.split('.')
    const row = rowCollumPair[0]
    const collum = rowCollumPair[1]
    if(turnPlayer === 'player1'){
        span.innerText = 'X'
        vBoard[row][collum] = 'X'
    }else{
        span.innerText = 'O'
        vBoard[row][collum]= 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)
}

document.getElementById('start').addEventListener('click', initializeGame)