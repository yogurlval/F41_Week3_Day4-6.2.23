
function hasMoreVowels(word){
    let vowelCount = 0
   let vowels = ['a', 'e', 'i', 'o', 'u']
   word = word.toLowerCase()

   for (let i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){
        vowelCount++
    }
   }
if(word.length / 2 < vowelCount){
    return true
} else {
    return false
}

}

console.log(hasMoreVowels("mice"))
console.log(hasMoreVowels("Aal"))
console.log(hasMoreVowels("car"))

// switch(word[i]){
//     case "a":
//         vowelCount++
//         break;
//     case "e":
//         vowelCount++
//         break;
//     case "i":
//         vowelCount++
//         break;
//     case "o":
//         vowelCount++
//         break;
//     case "u":
//         vowelCount++
//         break;
//     default:
//         break;
// }