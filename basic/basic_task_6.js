// - 1 + 2 -3 + 4 - 5 + 6
var str = ""
for (i = 1; i <= 10; i++){
    str +=(' - ' + i + ' + ' + (i+1));
    i++;
}
console.log(str);