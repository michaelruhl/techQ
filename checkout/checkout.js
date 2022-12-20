const checkout = (a, b) => {
    let deltaArr = []
    let maxed = 0

   for (let i = 0; i < a.length; i + b) {
       let sliced = a.slice(i,b)
       maxed = Math.max(...sliced)
       let reduced = sliced.reduce((a,b) => a - b,maxed)
   
       let delta = maxed + reduced

       deltaArr.push(delta)

   }

    console.log(maxed)
    console.log(reduced)
    console.log(sliced)
    console.log(delta)
    console.log(deltaArr)
}
checkout([10,2,3,3], 2)