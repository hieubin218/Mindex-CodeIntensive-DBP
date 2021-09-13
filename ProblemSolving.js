// NAME: HIEU DANG
// ENTRANCE TEST FULLSTACK
// DATE: 13/09/2021


// PROBLEM 1

    // Example:
    // Input: [2, 3, -5, -2, 4]
    // Output: 10 (-5 x -2 = 10)

function adjacentElementsProduct(arr) {
    let products = [];
    let sizeOfArray = arr.length;

    for (let i = 0; i < sizeOfArray -1; i++) {
        products.push(arr[i] * arr[i + 1]);
    };
     
    let largestNums = Math.max(...products);
    console.log(largestNums);
}


adjacentElementsProduct([2, 3, -5, -2, 4]);
adjacentElementsProduct([-9, 7, 2, -10, 1]);
adjacentElementsProduct([3, 4, -6, -2, 100]);




// PROBLEM 2
    // Example:
    // Input: [60, 40, 55, 75, 64]
    // Output: [179, 115]

function alternatingSums(a) {
    let team1 = [];
    let team2 = [];

    for (let i = 0; i < a.length; i++) {

        // if (a.indexOf(a[i]) % 2 == 0) {
        //     team1.push(a[i]);
        // } else {
        //     team2.push(a[i]);
        // }

        (a.indexOf(a[i]) % 2 == 0) ? team1.push(a[i]) : team2.push(a[i]);
        
    }
    // Use Reduce to add sum of both array
    let sums = (a, b) => a + b;
    console.log([team1.reduce(sums), team2.reduce(sums)]);
}


alternatingSums([60, 40, 55, 75, 64]);
alternatingSums([60, 40, 55, 75, 64]);
alternatingSums([60, 40, 55, 75, 64]);

