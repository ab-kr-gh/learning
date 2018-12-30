function convertTemplate (...input){
let combinedString = ""
for (i=0;i<input.length;i++){
combinedString=combinedString+input[i]

}
console.log(combinedString)
}


convertTemplate("a","b",2,1,"qw")