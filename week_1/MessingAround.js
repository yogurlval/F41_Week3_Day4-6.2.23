let myName = "valentina bowman"

myName = myName.split(' ')
console.log(myName)

for( let i = 0; i <myName.length; i++){
    myName[i] = myName[i][0].toUpperCase() + myName[i].slice(1)
}

console.log(myName)

myName = myName.join(' ')
console.log(myName)


////// .filter

let filteredArr = arr.filter((element) => {
    if(element % 2 === 0){
        return false
    } else {return true}
})
console.log(filteredArr)