// Function to find matching words between two strings
function findMatchingWords(str1, str2) {
    const words1 = str1.split(" ");
    const words2 = str2.split(" ");
    const matchingWords = [];
    for (let word1 of words1) {
        for (let word2 of words2) {
            if (word1 === word2) {
                matchingWords.push(word1);
                break;
            }
        }
    }
    return matchingWords;
}

const text1 = "A year spent in artificial intelligence is enough to make one believe in God.";
const text2 = "Machine intelligence is the last invention that humanity will ever need to make.";
const matchedWords = findMatchingWords(text1, text2);
console.log("Matching words:", matchedWords);
