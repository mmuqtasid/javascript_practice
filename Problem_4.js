//Generate Pyramird Pattern
//  *
// **
// ***
// ****
//*****
// ****
// ***
// **
//  * 

// function generatePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
//     for (let i = rows - 1; i >= 1; i--) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }


// generatePattern(5);
function generatePattern(rows) {
let n = 5; 
for (let i = 1; i <= n; i++) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i)); 
} 

for (let i = n - 1; i >= 1; i--) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat(n - i) + str.repeat(i)); 
}
}
generatePattern(6);
