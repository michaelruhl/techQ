const removeVowels = (string) => {
    
    let splitted = string.split('')

    splitted = splitted.filter(e => e !== 'i' && e !== 'e' && e !== 'a' && e !== 'o' && e !== 'u' && e !== 'A' && e !== 'E' && e !== 'I' && e !== 'O' && e !== 'U' )

    // console.log(string.split(''))
    
    // for (let vowel of splitted) {
    //     if ( vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' ) {
    //         vowel = ''
    //     }
    // }

    // splitted.join('')
    
    console.log(splitted.join(''))

}

removeVowels("This website is for losers LOL!")