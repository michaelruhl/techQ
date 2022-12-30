//  DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.


const truep = "()[[{}()]()]"
const falsep = ")(())"

const parentheses = (a) => {
    let count1 = 0
    let count2 = 0
    
    let count3 = 0
    let count4 = 0
    
    let count5 = 0
    let count6 = 0
    
    for (let element of a)  {
        if ( element === "(" )  {
            count1 ++
        } else if ( element === ")" )   {
            count2++
        } else if ( element === "[" )   {
            count3++
        } else if ( element === "]" )   {
            count4++
        } else if ( element === "{" )   {
            count5++
        } else if ( element === "}" )   {
            count6++
        }

    }
    if ( count1 !== count2 )    {
        console.log(false)
    } else if ( count3 !== count4 )    {
        console.log(false)
    } else if ( count5 !== count6 )    {
        console.log(false)
    } else {
        console.log(true)
    }
}

parentheses( falsep )