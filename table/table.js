const table = (n) => {
    let emptyArr = []
    emptyArr.length = n

    let indexArr = []

    for (let i = 0; i < n; i++) {
        emptyArr[i] = [(i + 1)]
        emptyArr[i].length = n

        for (let j = 1; j < n; j++) {
emptyArr[i][j] = emptyArr[i][0] + emptyArr[i][0] * j 
        }
        
       

        
    }
    console.log(emptyArr)
}
table(22)