const palindromes = function (str) {
    str = str.toUpperCase() ;
    let onlyCharArr = [];
    for(let i = 0; i < str.length; i++){
        if(!(str[i]>="0" && str[i]<="Z")){
            continue;
        }
        onlyCharArr.push(str[i]);
    }
    let onlyCharStr = onlyCharArr.join("");

    for(let i = 0; i < (onlyCharStr.length-1)/2 ; i++){
        if(onlyCharArr[i] !== onlyCharArr[onlyCharArr.length - 1 - i]){
            return false;
        } 
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
