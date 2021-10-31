function findMinimumPairDistance(arr) {
    
    let distance = 0; let j = 0;
    for(i = 0; i < arr.length; i++) {
        arr.forEach(element => {
            if(element == arr[i]) distance = j-i;
            j++;
        });
    }
    console.log(distance)
}

// can't solve this one 

findMinimumPairDistance([2, 1, 2]);