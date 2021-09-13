// Name: Hieu Dang



// PROBLEM 1: VALID PARENTHESIS
/** Give a string **`s`** containing just the character **`'(',  ')' ,  '{' ,  '}' ,  '['  and ']'`**, 
 * determine if the input string is valid.
 * An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
 * 
 */


// Condition: mapping[s[i]] = mapping["("] = s[i+1]
    // Khi so sánh bất kỳ s[i] và s[i+1] --> phải dùng string.length -1 
    // nếu string.length (không có -1) --> for loop bị out khỏi string 
function ValidParentThesis(s) {
    const mapping = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i=0; i<s.length -1; i++) {
        const prevChar = s[i]; // ()[] --> prevChar: (
        const nextChar= s[i + 1]; // nextChar: )

        if (mapping[prevChar] !== nextChar) {
            return false;
        }
        i++;
    }
    return true;
  
} 
console.log(ValidParentThesis("()"));
console.log(ValidParentThesis("()[]{}"));
console.log(ValidParentThesis("([}"));


function ValidParentThesis_2(s) {
    const mapping = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    // let Stack is empty
    const stack = [];

    // Loop through string 
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; // char = s[0] = (   s[1] = ) 

        // check if char = ( open parentheses --> push to empty stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } 
        // if char not != "( { [" ==> compare the taken value out of stack >< char not "( { ["
        else {
            if (mapping[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return true;
}


// PROBLEM 2: FIND ALL NUMS DISAPPEARED IN ARRAY
/** Given an array **`nums`** of n integers where **`nums[i]`** is in the range [1, n], 
** return an array of all the integers in the range [1, n]** that **do not appear in nums.**
 */


// Example 1:
// Input: nums = [1, 2, 4, 7, 8]
// Output: [3, 5, 6]


function NumsDisappeared(nums) {
    const dict = {};
    const missingNumbers = [];

    // Create dict {}
    for (let num of nums) {
        // check num có tồn tại trong dict hay ko
        // (num in dict) --> num exists in dict {}
        // !(num in dict) --> num NOT exist in dict {}
        if ( !(num in dict) ) {                 // Similar to dict.hasOwnProperty(num)
            // { dict[num]: num}
            dict[num] = num;
        }
    }

    const sizeOfNums = nums.length;
    // check length of input array
    for (let i = 0; i < sizeOfNums; i++) {
        // check if the number not exist in dict {} based on length of nums
        if (!(i in dict)) {
            // add missing numbers in array --> Ouput
            missingNumbers.push(i);
        }
    }
    return missingNumbers; 
}; 

console.log(NumsDisappeared([2, 2, 4, 3, 6]));
console.log(NumsDisappeared([1, 1]));

// Javascript Object: nếu key đã tồn tại thì chỉ ghi đè lên key đó



// PROBLEM 3: LEXICOGRAPHICAL NUMBERS:
    // return all numbers in range [1, n] sorted in Lexicographical order
    // Javascript: Sort() --> theo kiểu bảng chữ cái

function LexicoNums (n) {
    const arr = [];

    // i = 1 when array is [1, n]
    for (let i = 1; i < n; i++) {
        arr.push(i);
    }

    return arr.sort();
}

// Test Function 3
console.log(LexicoNums(4));
console.log(LexicoNums(13));
console.log(LexicoNums(7));



// PROBLEM 4: FIRST UNIQUE CHARACTER IN A STRING
    // find first non-repeating character, if not return -1
    // Example 1:
    // Input: s = "leetcode"
    // Output: 0


function UniqueChar(s) {
    // empty array to push string into it
    const dict = [];

    // Loop string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // if not exist -> key = 1
        if (!(char in dict)) {
            dict[char] = 1;         // solution 2: dict[char] = dict[char] ? dict[char] + 1: 1;

        // if already exist -> key++
        } else {
            dict[char] = dict[char] + 1;
        }

        for (let i =0; i<s.length; i++) {
            const char = s[i];
            if (dict[char] === 1) {
                return i; // index of non-repeat char
            }
        }
        return -1;
    };

    
   

}


console.log(UniqueChar("loveleetcode"));
console.log(UniqueChar("aabb"));
console.log(UniqueChar("leetcode"));


