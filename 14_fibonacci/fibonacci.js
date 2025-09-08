const fibonacci = function(index) {
    index = parseInt(index);
    if(index===0){
        return 0;
    }
    if(index<0){
        return "OOPS";
    }
    let fibonacciPrev= 1;
    let fibonacciCurr= 1;
    for(let i = 2; i < index; i++){
        
        let temp = fibonacciCurr;
        fibonacciCurr += fibonacciPrev;
        fibonacciPrev = temp;
    }
    
    return fibonacciCurr;
};



// Do not edit below this line
module.exports = fibonacci;
