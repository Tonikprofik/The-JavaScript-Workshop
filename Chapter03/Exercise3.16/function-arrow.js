var getRandomString = (source) => {
    var returnChar ='';
    if (source != undefined &&source.length> 0) {
        returnChar = source.charAt(Math.floor(Math.random() * source.length));

    }
    return returnChar;
}

console.log('():', getRandomString());
console.log('("AEIOU"):', getRandomString('AEIOU'));
console.log('("JavaScript"):', getRandomString('JavaScript'));
console.log('("124678"):', getRandomString('124678'));
console.log('(124678):', getRandomString(124678));
console.log('(true):', getRandomString(true));