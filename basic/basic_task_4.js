// var str = "string"
// var res = ""

var num = 12321;
var original = num; 
var rev = 0;
var sum = 0;

while (num > 0) {
    let digit = num % 10;  
    rev = rev * 10 + digit; 
    num = Math.floor(num / 10); 
}

console.log("Reversed number:", rev);

if(rev === original){
    console.log("It's a palindrome.");
} else {
    console.log("It's not a palindrome.");
}

while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
}


if(sum === original){
    console.log("It's an armstrong.");
} else {
    console.log("It's not an armstrong.");
}



// for(i=str.length;i=0;i--){
//     res = res + str.indexOf[i]

//     if(res == str){
//         console.log("Its a palindome")
//     }
// }

// console.log(res)
