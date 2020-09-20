
var test123= getDigitsOfNumber(123);
console.log("test: ", test123);

function getDigitsOfNumber(num){
    var digits = [];
    
    num = Math.floor(Math.abs(num)); //convert any negatives into positive numbers and truncates decimals
    
    if(!isNaN(num)){ //if tests to assure that num contains number
        while(num !=0){ //repeat until num becomes 0
            digits.push (num%10);
            num = Math.floor(num/10);
        }
    }
    console.log("num:", num);
    return digits;
}

console.log("getdigits: " ,getDigitsOfNumber)

var test3= getDigitsOfNumber(345);
console.log("test: ", test3);

var test456 = getDigitsOfNumber(456);
console.log("test456:", test456);
console.log('5:', getDigitsOfNumber(5));
console.log('4563:', getDigitsOfNumber(4563));
console.log('123.654:', getDigitsOfNumber(123.654));
console.log('-123.654:', getDigitsOfNumber(-123.654));
console.log('"1000"', getDigitsOfNumber("1000"));
console.log('"1,000"', getDigitsOfNumber("1,000"));
console.log('"B37"', getDigitsOfNumber("B37"));
console.log('"37B"', getDigitsOfNumber("37B"));