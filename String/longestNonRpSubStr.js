function findLongSub(str) {
    let hash = {};
    let subStr = "";
    let maxStr = "";
    for (let i = 0; i < str.length; i++){
        if (hash[str[i]]) {
            maxStr = subStr.length > maxStr.length ? subStr : maxStr;
            subStr = "";
            hash = {};
        } else {
            subStr += str[i];
            hash[str[i]] = 1;
        }
    }
    if (maxStr.length < subStr.length) {
        maxStr = subStr;
    }
    return maxStr;
}

console.log(findLongSub("hashim"))