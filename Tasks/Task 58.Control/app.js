function argumentStrings(str1, str2) {
    if (str1.length !== str2.length) { 
        return false;
    }
    for (let i = 0; i < str1.length; i++) { 
        if (str1[i] !== str2[i]) { 
            return false;
        }
    }
    return true; 
}

console.log(argumentStrings('1,3,4,7', '1,3,7,7')); 
console.log(argumentStrings('1,2,3,4', '1,2,3,4')); 
