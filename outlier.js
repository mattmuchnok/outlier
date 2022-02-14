arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
arr2 = [160, 3, 1719, 19, 11, 13, -21]

const outlier = (arr) => {
    let evenArr = []
    let oddArr = [] 
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        } else if (arr[i] % 2 === 1) {
            oddArr.push(arr[i])
        }
    }
    
    if (evenArr.length === 1) {
        console.log(evenArr)
    } else if (oddArr.length === 1) {
        console.log(oddArr)
    }
}


outlier(arr1)
outlier(arr2)