// LC Problem: Two Sum (Javascript)
// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=xi4ci4ig

// Brute Force Solution
const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }

    // Exactly 1 Solution so this should never happen...
    return [-1, -1];
}

// Try Hash Map Solution