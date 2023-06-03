const best = arr => {
    let lowest = arr[0]
    let profit = 0

    for( let i = 0; i < arr.length; i++){
        if(arr[i] < lowest){
            lowest = arr[i]
        }

        let difference = arr[i] - lowest
        if(difference > profit){
            profit = difference
        }
    }
    return profit
  }
  
  console.log(best([1, 2, 3, 4, 5]))
  console.log(best([2, 3, 10, 6, 4, 8, 1]))
  console.log(best([5, 4 , 3, 2, 1]))
  console.log(best([0,100]))