// LC Problem: Sum of Two Integers (NO OPERATORS)
// https://leetcode.com/problems/sum-of-two-integers/description/?envType=problem-list-v2&envId=xi4ci4ig

// JS Cheat Method
const getSumCheat = (a, b) => {
    const firstArr = new Array(a).fill(true);
    const secArr = new Array(b).fill(true);
    return firstArr.concat(secArr).length;
}

// Through Bitwise Operators (need to study more on this)
const getSumProper = (a, b) => b ? getSum(a ^ b, (a & b) << 1) : a;
// ^: (XOR)
// &: (AND)
// << : Zero fill left shift