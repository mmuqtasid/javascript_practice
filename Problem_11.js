//Write Program that count the number of vowels  in a given string.

function  countVowel(str) {
    let vow = "aeiouAEIOU";
    let n = str.length;
    let count=0;
     for (let i=0; i<n; i++)
         if (vow.indexOf(str[i]) != -1)    
             count++;
    return count;
}

console.log(countVowel("Hello World"));
