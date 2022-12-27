const checkout = (a, b) => {
    let deltaArr = []
    let maxed = 0
    let delta;
    let spliced;
    let splicedArr = []
    let reduced;
    let queTime = 0
    
    
    let emptyArr = []
    
    
    for (i = 0; i<= a.length; i++) {
        emptyArr.push(a.splice(0,b))
        
    }
    
    
    let plusTime
    const queTimeFunc = () => {
            for (let i = 0; i < emptyArr.length; i++ )  {
                if (emptyArr[i].length > 1) {
                    spliced = emptyArr[i]
                    maxed = Math.max(...spliced)
                    reduced = spliced.reduce((maxed,b) => maxed - b,maxed)
                    delta = maxed + reduced
                    queTime = maxed
                    if( (maxed + reduced) <= 0 )    {
                        queTime = queTime - delta
                    }
                    
                    
                } else {
                    plusTime = Math.max(...emptyArr[i])
                    queTime += plusTime
                }
            }
        }
        
        emptyArr.forEach(queTimeFunc)
        //    spliced = a.splice(0,b)
        //    splicedArr.push(spliced)
           
        //    deltaArr.push(delta)
           
        

        // console.log(splicedArr)
           //    for (let i = 0; i < a.length; i++) {
               
// 
    //    console.log(delta)
// console.log(sliced)
// console.log(reduced)

console.log(queTime)

//    let deltaMax = 0

    //         deltaMax = Math.max(...deltaArr)
    //         console.log(deltaMax)

    // console.log(delta)
    // console.log(deltaArr)
}
checkout([10,9,3,3], 3)  