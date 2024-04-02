//Write code to reverse string 
//Given a string, write an algorithm that
let str = "Hello World "; 
let strlength = str.length;
let reversString = "";
for (let i=strlength-1; i>=0; i--) {
    reversString += str[i];
}
console.log(reversString);