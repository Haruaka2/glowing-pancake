// LC Problem: Reverse String [IN-PLACE]
// https://leetcode.com/problems/reverse-string/description/

// Brute Force Method (s is the array)
const reverseString = (s) => {
    const arrHalf = Math.round(s.length / 2);
    let num = 0;
    while(num < arrHalf) {
        const firstIndex = num;
        const secondIndex = (s.length - 1) - num;
        if(firstIndex !== secondIndex) {
            const firstVal = s[firstIndex];
            const lastVal = s[secondIndex];
            s[firstIndex] = lastVal;
            s[secondIndex] = firstVal;
        }
        num++;
    }
}

// Think of a more efficient way