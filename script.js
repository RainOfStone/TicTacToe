const NamePlayersBtnContainer = document.querySelector('#NamePlayersBtnContainer')
const Gameboard = document.querySelector('#GameBoard')
const GameBtn1 = document.querySelector('#GameBtn1')
const GameBtn2 = document.querySelector('#GameBtn2')
const GameBtn3 = document.querySelector('#GameBtn3')
const GameBtn4 = document.querySelector('#GameBtn4')
const GameBtn5 = document.querySelector('#GameBtn5')
const GameBtn6 = document.querySelector('#GameBtn6')
const GameBtn7 = document.querySelector('#GameBtn7')
const GameBtn8 = document.querySelector('#GameBtn8')
const GameBtn9 = document.querySelector('#GameBtn9')


function AddPlayer() {
    const NamePlayersBtn = document.querySelector('#NamePlayersBtn')
    const DialogContainer = document.querySelector('dialog')
    const StartBtn = document.querySelector('#StartBtn')


    NamePlayersBtnContainer.appendChild(NamePlayersBtn)
    DialogContainer.appendChild(StartBtn)
    function StartGame() {
        let StartGameListener = StartBtn.addEventListener('click', () => {
            DialogContainer.close()
            console.log('event prevented')
           DialogContainer.setAttribute('style', `height: 200px;
                         width: 300px;
                         border: none;
                         border-radius: 10px;`)
            DisplayStats()
        })
    }
    let NamePlayersListener = NamePlayersBtn.addEventListener('click', () => {
        DialogContainer.setAttribute('style', `display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;`)
        DialogContainer.showModal()
        NamePlayersBtn.disabled = true
    })
    return StartGame()

}

function DisplayStats() {
    const P1Name = document.querySelector('#P1Name')
    const P2Name = document.querySelector('#P2Name')
    const Player1NameInput = document.querySelector('#Player1Name')
    const Player2NameInput = document.querySelector('#Player2Name')
    if (Player1NameInput.value == '' && Player2NameInput.value == '') {
        P1Name.textContent = `Name: Player1`
        P2Name.textContent = `Name: Player2`
        TurnCreator()
    }
    else if (Player1NameInput.value != '' && Player2NameInput.value == ''){
        P1Name.textContent = `Name: ${Player1NameInput.value}`
        P2Name.textContent = `Name: Player2`
        TurnCreator()
    }
    else if (Player1NameInput.value == '' && Player2NameInput.value != ''){
        P1Name.textContent = `Name: Player1`
        P2Name.textContent = `Name: ${Player2NameInput.value}`
        TurnCreator()
    }
    else if (Player1NameInput.value != '' && Player2NameInput.value != ''){
        P1Name.textContent = `Name: ${Player1NameInput.value}`
        P2Name.textContent = `Name: ${Player2NameInput.value}`
        TurnCreator('X')
    }
}
AddPlayer()
function GameboardButtons(letter) {
    let Turn = letter, TurnChanger,
    P1Turn = document.querySelector('#P1Turn'),
    P2Turn = document.querySelector('#P2Turn'),
    GameBoardArray = ['', '', '', '', '', '', '', '', '']
    return {Turn, TurnChecker(){
        if (Turn == 'X') {
            P1Turn.textContent = 'Turn: X'
            P2Turn.textContent = 'Turn: '
            Gameboard.addEventListener('click', (event) => {
                let target = event.target
                switch(target.id) {
                    case 'GameBtn1':
                        GameBoardArray[0] = 'X'
                        GameBtn1.textContent = 'X'
                        GameBtn1.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn2':
                        GameBoardArray[1] = 'X'
                        GameBtn2.textContent = 'X'
                        GameBtn2.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn3':
                        GameBoardArray[2] = 'X'
                        GameBtn3.textContent = 'X'
                        GameBtn3.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn4':
                        GameBoardArray[3] = 'X'
                        GameBtn4.textContent = 'X'
                        GameBtn4.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn5':
                        GameBoardArray[4] = 'X'
                        GameBtn5.textContent = 'X'
                        GameBtn5.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn6':
                        GameBoardArray[5] = 'X'
                        GameBtn6.textContent = 'X'
                        GameBtn6.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn7':
                        GameBoardArray[6] = 'X'
                        GameBtn7.textContent = 'X'
                        GameBtn7.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn8':
                        GameBoardArray[7] = 'X'
                        GameBtn8.textContent = 'X'
                        GameBtn8.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                    break

                    case 'GameBtn9':
                        GameBoardArray[8] = 'X'
                        GameBtn9.textContent = 'X'
                        GameBtn9.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'O'
                        console.log(TurnChanger)
                    break
                } 
               /* if (TurnChanger == 'O') {
                    TurnCreator('O')
                }*/
            })
            
        }

        /*else if (Turn == 'O') {
            P1Turn.textContent = 'Turn: '
            P2Turn.textContent = 'Turn: O'
            Gameboard.addEventListener('click', (event) => {
                let target = event.target
                switch(target.id) {
                    case 'GameBtn1':
                        GameBoardArray[0] = 'O'
                        GameBtn1.textContent = 'O'
                        GameBtn1.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn2':
                        GameBoardArray[1] = 'O'
                        GameBtn2.textContent = 'O'
                        GameBtn2.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn3':
                        GameBoardArray[2] = 'O'
                        GameBtn3.textContent = 'O'
                        GameBtn3.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn4':
                        GameBoardArray[3] = 'O'
                        GameBtn4.textContent = 'O'
                        GameBtn4.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn5':
                        GameBoardArray[4] = 'O'
                        GameBtn5.textContent = 'O'
                        GameBtn5.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn6':
                        GameBoardArray[5] = 'O'
                        GameBtn6.textContent = 'O'
                        GameBtn6.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn7':
                        GameBoardArray[6] = 'O'
                        GameBtn7.textContent = 'O'
                        GameBtn7.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn8':
                        GameBoardArray[7] = 'O'
                        GameBtn8.textContent = 'O'
                        GameBtn8.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break

                    case 'GameBtn9':
                        GameBoardArray[8] = 'O'
                        GameBtn9.textContent = 'O'
                        GameBtn9.disabled = true
                        console.log(GameBoardArray)
                        TurnChanger = 'X'
                    break
                } 
                if (TurnChanger == 'X') {
                        TurnCreator('O')
                    }
            })
            
        }*/
    }}
}

function TurnPasser(turn) {
    turn.TurnChecker()
}

function TurnCreator(TurnChanger) {
    /*if (TurnChanger == 'X' || TurnChanger == ''){
        let PlayerTurn = GameboardButtons('X')
        TurnPasser(PlayerTurn)
    }
    else if (TurnChanger == 'O') {
        let PlayerTurn = GameboardButtons('O')
        TurnPasser(PlayerTurn)
    }*/
    let PlayerTurn = GameboardButtons('X')
    TurnPasser(PlayerTurn)
    console.log('TurnCreator ran')
} /*RECREATE THESE 3 FUNCTIONS BUT DO IT FOR O*/






/* for Gameboard buttons:
const button = document.queryselector('#Button1-9')
case: 'id':
let i = 0
if (some turn condition && button9.textContent == 'x or o') {
    i = 9
    Array[i] = button.textContent
}
*/ 