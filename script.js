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


function Test(test) {
    return {test,
        hello() {
            console.log(this.test)
        }
    } //can be accessed by other functions
}
function Pass(x) {
    x.hello()
}
function Test2() {
    const test1 = Test('hello world')
    Pass(test1)
}
Test2()
/*let buttonTest = NamePlayersBtnContainer.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'NamePlayersBtn':
            dialog.showModal()

    }
})*/
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
    const P1Turn = document.querySelector('#P1Turn')
    const P1Letter = document.querySelector('#P1Letter')
    const P2Name = document.querySelector('#P2Name')
    const P2Turn = document.querySelector('#P2Turn')
    const P2Letter = document.querySelector('#P2Letter')
    const Player1NameInput = document.querySelector('#Player1Name')
    const Player2NameInput = document.querySelector('#Player2Name')
    P1Letter.textContent = 'X'
    P2Letter.textContent = 'O'
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
        TurnCreator()
    }
}
AddPlayer()
function GameboardButtons(letter) {
    let Turn = letter
    return {Turn, TurnChecker(){
        let GameBoardArray = ['', '', '', '', '', '', '', '', '']
        if (Turn == letter) {
            Gameboard.addEventListener('click', (event) => {
                let target = event.target
                switch(target.id) {
                    case 'GameBtn1':
                        GameBoardArray[0] = 'X'
                        GameBtn1.textContent = 'X'
                        GameBtn1.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn2':
                        GameBoardArray[1] = 'X'
                        GameBtn2.textContent = 'X'
                        GameBtn2.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn3':
                        GameBoardArray[2] = 'X'
                        GameBtn3.textContent = 'X'
                        GameBtn3.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn4':
                        GameBoardArray[3] = 'X'
                        GameBtn4.textContent = 'X'
                        GameBtn4.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn5':
                        GameBoardArray[4] = 'X'
                        GameBtn5.textContent = 'X'
                        GameBtn5.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn6':
                        GameBoardArray[5] = 'X'
                        GameBtn6.textContent = 'X'
                        GameBtn6.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn7':
                        GameBoardArray[6] = 'X'
                        GameBtn7.textContent = 'X'
                        GameBtn7.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn8':
                        GameBoardArray[7] = 'X'
                        GameBtn8.textContent = 'X'
                        GameBtn8.disabled = true
                        console.log(GameBoardArray)
                    break

                    case 'GameBtn9':
                        GameBoardArray[8] = 'X'
                        GameBtn9.textContent = 'X'
                        GameBtn9.disabled = true
                        console.log(GameBoardArray)
                    break
                } 
            })
        }
    }}
}

function TurnPasser(turn) {
    turn.TurnChecker()
}

function TurnCreator() {
    let PlayerTurn = GameboardButtons('x')
    TurnPasser(PlayerTurn)
    console.log('TurnCreator ran')
    Gameboard.appendChild(GameBtn1)
    Gameboard.appendChild(GameBtn2)
    Gameboard.appendChild(GameBtn3)
    Gameboard.appendChild(GameBtn4)
    Gameboard.appendChild(GameBtn5)
    Gameboard.appendChild(GameBtn6)
    Gameboard.appendChild(GameBtn7)
    Gameboard.appendChild(GameBtn8)
    Gameboard.appendChild(GameBtn9)
}






/* for Gameboard buttons:
const button = document.queryselector('#Button1-9')
case: 'id':
let i = 0
if (some turn condition && button9.textContent == 'x or o') {
    i = 9
    Array[i] = button.textContent
}
*/ 