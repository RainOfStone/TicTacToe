const NamePlayersBtnContainer = document.querySelector('#NamePlayersBtnContainer')
const dialog = document.querySelector('dialog')
console.log('hello world')
function Test() {
    let TestObj = 'hello'
    return {TestObj,} //can be accessed by other functions
    Test2()
}
function Test2() {
    console.log(TestObj)
}
Test()
NamePlayersBtnContainer.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'NamePlayersBtn':
            dialog.showModal()

    }
})
function AddPlayer() {
    const NamePlayersBtn = document.querySelector('#NamePlayersBtn')
    NamePlayersBtnContainer.appendChild(NamePlayersBtn)
    return {NamePlayersBtn,}
}
AddPlayer()