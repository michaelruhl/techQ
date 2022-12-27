let a = [10,2,3,3]

let b = 3
 
let queTime;
let tellers = []
let mind;

const reduceBy1 = () => {
    while (mind > 0) {
        
        tellers = tellers.map(element => element - 1)
        mind = mind -1
    }
    
}

const splicedArr = (a, b) => {

    if (b > 1) {

    tellers = a.slice(0,b)
    a.splice(0,b)
    
    queTime = Math.max(...tellers)
    
    let masterIndex;
    for (let i = 0; i <= tellers.length; i++)   {
        if (queTime === tellers[i]) {
            masterIndex = i
        }
    }

    reduceBy1()

        while (a.length > 0) {

            for (let i = 0; i <= tellers.length; i++)   {
                if (tellers[i] === 0) {
                    if (tellers[masterIndex] === 0) {
                        queTime += a[0]
                    }
                    tellers[i] += a[0]
                    a.shift()
                } 
            }
            for (let i = 0; i <= tellers.length; i++)   {
                mind = Math.min(...tellers)
               
                reduceBy1()
            
            }

        }
   
    } else {
        queTime = a.reduce((a,b) => a + b,0)
    }
    console.log(queTime)
}
splicedArr(a, b)
