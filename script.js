const NamePlayersBtnContainer = document.querySelector('#NamePlayersBtnContainer')
const GameboardContainer = document.querySelector('#GameBoardContainer')
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
    }
    else if (Player1NameInput.value != '' && Player2NameInput.value == ''){
        P1Name.textContent = `Name: ${Player1NameInput.value}`
        P2Name.textContent = `Name: Player2`
    }
    else if (Player1NameInput.value == '' && Player2NameInput.value != ''){
        P1Name.textContent = `Name: Player1`
        P2Name.textContent = `Name: ${Player2NameInput.value}`
    }
    else if (Player1NameInput.value != '' && Player2NameInput.value != ''){
            P1Name.textContent = `Name: ${Player1NameInput.value}`
            P2Name.textContent = `Name: ${Player2NameInput.value}`
    }
    //run function to place X and O
}
    /*let NamePlayersListener = NamePlayersBtn.addEventListener('click', () => {
                DialogContainer.setAttribute('style', `display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;`)
                DialogContainer.showModal()
                NamePlayersBtn.disabled = true
                if (NamePlayersBtn.disabled == true) {
                    return {NamePlayersBtn ,DialogContainer, StartBtn,}
                }
            })
        //run function to add player names on board then run function to display turn etc.*/
AddPlayer()
/* for Gameboard buttons:
const button = document.queryselector('#Button1-9')
case: 'id':
let i = 0
if (some turn condition && button9.textContent == 'x or o') {
    i = 9
    Array[i] = button.textContent
}
*/ 