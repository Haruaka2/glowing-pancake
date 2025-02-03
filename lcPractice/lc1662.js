// LC Problem: Check if Two String Arrs are Equal
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

// With JOIN method
const areStrArrsEqual = (word1, word2) => {
    return word1.join("") == word2.join("");
}