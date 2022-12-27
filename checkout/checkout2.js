let a = [10,9,3,3]

let b = 3

let placeholder = [];

let emptyArr = []
const splicedArr = (a) => {
    let maxed = Math.max(...a)
    console.log(maxed)
    for (i=0;i<=a.length;i++)    {
        emptyArr.push(a.splice(0,b))
        // console.log("emptyArr length", emptyArr[0].length)
    }
    for (let i = 0; i < emptyArr.length; i++)    {
        let queArr = emptyArr[i]
        console.log("queArr length",queArr.length)
        for (let j=0; j < queArr.length; j++) {
            placeholder.push(maxed - emptyArr[i][j])
        }
    }


}
splicedArr(a)
console.log(emptyArr)
console.log(placeholder)
