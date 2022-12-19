const shortestWord = function(string) {
	let stringArr = string.split(" ").map((word) => word.length)

    console.log(Math.min(...stringArr))
	return Math.min(...stringArr)
}

shortestWord("Hi this is my name")