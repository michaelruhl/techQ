// productArray([10,3,5,6,2]) return ==> [180,600,360,300,900]



// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

const productArray = (array) => {

    let array1 = []
    let array2 = []
    let array3 = []
    let array4 = []
    let array5 = []
    
    array1.push(...array)
    array2.push(...array)
    array3.push(...array)
    array4.push(...array)
    array5.push(...array)

    let prodArray = []

    array1.shift()
    prodArray.push(array1.reduce((a,b) => a*b))
    
    array2.splice(1,1)
    prodArray.push(array2.reduce((a,b) => a*b))

    array3.splice(2,1)
    prodArray.push(array3.reduce((a,b) => a*b))

    array4.splice(3,1)
    prodArray.push(array4.reduce((a,b) => a*b))

    array5.splice(4,1)
    prodArray.push(array5.reduce((a,b) => a*b))



    console.log(prodArray)
}

productArray([10,3,5,6,2])