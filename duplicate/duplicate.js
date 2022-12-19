const duplicate = (array) => {
    // array = [array] + ',' + [array]
    array.push(array[0], array[1], array[2])
    console.log("foo" && "bar")
    console.log("hello" || "world")
    console.log(array)
    return array
}

duplicate([1,2,3])