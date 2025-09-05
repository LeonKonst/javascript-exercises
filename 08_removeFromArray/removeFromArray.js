const removeFromArray = function(arr, ...itemsToRemove) {
    for(let itemToRemove of itemsToRemove){
        arr = arr.filter(arrItem => arrItem !== itemToRemove);
    }    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
