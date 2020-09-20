

var getRandomString = function(source){
    var returnChara='';
    if (source != undefined &&source.length >0) {
        returnChara = source.charAt(Math.floor(Math.random() * source.length));
    }
    console.log("source: ", source);
    return returnChara;
}
console.log('getrandom: ',getRandomString);


console.log('():', getRandomString());
console.log('("AEIOU"):', getRandomString('AEIOU'));
console.log('("JavaScript"):', getRandomString('JavaScript'));
console.log('("124678"):', getRandomString('124678'));
console.log('(124678):', getRandomString(124678));
console.log('(true):', getRandomString(true));