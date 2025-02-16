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