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
        element.classList.add('region')
        element.addEventListener('click', handBoardClick)
    })
}

function getWinRegions(){
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function disableRegion(element){
    element.classList.remove('region')
    element.removeEventListener('click', handBoardClick)
}

function handleWin(regions){
    regions.forEach(function(region){
        document.querySelector('[data-region="'+ region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' VENCEU!!!'
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
    const winRegions = getWinRegions()
    if(winRegions.length > 0){
        handleWin(winRegions)
    }else if(vBoard.flat().includes('')){
        turnPlayer = turnPlayer ==='player1'? 'player2' : 'player1'
        updateTitle()
    }else{
        document.querySelector('h2').innerHTML = 'Empate!'
    }
}

document.getElementById('start').addEventListener('click', initializeGame)