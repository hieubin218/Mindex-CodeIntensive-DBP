// Name: ĐẶNG MINH HIẾU
// Class: CI

// Problem 1:
/* Write a function that takes an array of users that satisfy the following requirement. Use array 
map make an array of the names in <h1></h1> and the ages in <h2></h2> */

const users = [
    {
        name: "Angelina Jolie",  
        age: 8
    },
    {
        name: "Eric Jones",  
        age: 2
    },
	{
        name: "Paris Hilton",  
        age: 5
    },
	{
        name: "Kayne West", 
        age: 16
    },
	{ 
        name: "Bob Ziroll", 
        age: 100
    }
];

let UserArray = users.map( (mapItem) => {
    let result = `<div><h1> ${mapItem.name} </h1><h2> ${mapItem.age} </h2></div>`;
    return result;
});

console.log(UserArray);


// Problem 2
// Write a function that takes an array of students that satisfy the following requirement. 

const students = [
    { name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' }
];

let StudentsFilter = students.filter( (filterItem) => {
    return (filterItem.gender != "female");
});

console.log(StudentsFilter);



// Problem 3:
/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by re-arranging the letters of a different word or phrase, 
typically using all the original letters exactly once. */

const strs = ["eat","tea","tan","ate","nat","bat"];

// const StringSort = strItem => {
//     let NewString = strItem.split("").sort();
// }


function ReArrangeGroup(ListArray) {
    let Objectt = {};

    if (ListArray.length == 1) {
        return [[ListArray[0]]];
    } 

    for (let i = 0; i < ListArray.length; i++) {
        console.log(i);
    }

}

console.log(ReArrangeGroup(strs));




// Problem 4:
/* Given a non-empty array of integers nums, 
every element appears twice except for one. Find that single one. */

const NumbersArray = [2,2,1];


function SingleValue() {
    let arr = [];
    let obj = {};

    if (NumbersArray.length == 1) {
        arr = NumbersArray[0];
        return arr;
    }

    for (let i = 0; i < NumbersArray.length; i++) {
        let ObjectKey = NumbersArray[i];
        if (ObjectKey in obj) {
            obj[ObjectKey]++;
        } else {
            obj[ObjectKey] = 1;
        }
    }

    for (let ObjectKey in obj) {
        if (obj[ObjectKey] > 1) {
            continue;
        } else {
            return ObjectKey;
        }
    }
}

console.log(SingleValue());





// 3 Different funtion types
    // Function 1: Function Declaration

// function FunctionName (parameter) {
//     return 2037 - parameter;
    
// }


// FunctionName(12);

//     // Function 2: Function Expression
// const FunctionName1 = function (parameter1) {

// }

//     // Function 3: Arrow Function
// const FunctionName2 = (parameter2) => 20237 - parameter2;