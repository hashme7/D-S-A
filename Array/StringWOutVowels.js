const findSubStringWithOutVowels = (word) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let cSubString = "";
    let longestSubStr = "";
    for (let i = 0; i < word.length; i++){
        if (vowels.has(word[i].toLowerCase())) {
            if (cSubString.length > longestSubStr.length) {
                longestSubStr = cSubString;
            }
            cSubString = "";
        } else {
            cSubString += word[i];
        }
    }
    if (cSubString.length > longestSubStr.length) longestSubStr = cSubString;
    return longestSubStr;
}

// Example usage:
const input = "abrcadabra";
console.log(findSubStringWithOutVowels(input)); 