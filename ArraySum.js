let sumArr = (arr) => {
    let sum = 0;

    arr.forEach(e => {
        if(typeof e == "number"){
            sum += e;
        } else {
            sum += sumArr(e);
        }
    })

    return sum;
}