// LC Problem: Contains Duplicates
// https://leetcode.com/problems/contains-duplicate/description/

// Brute Force Method
// Got Time Limit Passed, but that's expected
const containsDuplicate = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j])
                return true;
        }
    }
    return false;    
}

// Map Method
const containsDupeEfficient = (nums) => {
    let tracker = {};
    nums.forEach(num => {
        if(tracker?.[num] !== undefined) {
            tracker[num] = tracker[num] + 1;
        } else {
            tracker[num] = 1;
        }
    })

    return Object.values(tracker).some(num => num > 1);
}


// Thought: Try Check Length Method
// Thought: Maybe we can try with a reducer next?


