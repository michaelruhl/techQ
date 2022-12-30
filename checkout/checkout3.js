// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

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
