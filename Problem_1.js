//Find a matching text in a string text . Output will be Yes or No ?
// Method-1
// const searchtext = "This is a sample text to search for a matching substring.";
// const match = "sample";

// if (text.includes(searchText)) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Method -2 

// function findMatch(text, searching) {
//     if (text.includes(searching)) {
//         return "Yes";
//     } else {
//         return "No";
//     }
// }

// const newText = "Machine intelligence is the last invention that humanity will ever need to make.";
// const Yourtext = "textt";
// const resultsearch = findMatch(text, searchText);
// console.log(resultsearch); 


//Solution 2

// function findText(text, searchText) {
//     if (text.includes(searchText)) {
//         return "Yes";
//     } else {
//         return "No";
//     }
// }


// const text = prompt("Enter the text:");
// const searchText = prompt("Enter the search text:");

// const result = findMatchingText(text, searchText);
// console.log(result); 


//Method - 4
//Using for Loop

function MatchText(text, searchText) {
    let found = false;
    for (let i=0; i < text.length; i++) {
       if (text[i] === searchText) {
           found = true;
           break;
       }
    }
   return found ? 'Yes' : 'No';
}

const t = prompt("Enter text")
const st = "s";
const rst = MatchText(t, st);
console.log(`Is "${st}" present in "${t}"? ${rst}`);    