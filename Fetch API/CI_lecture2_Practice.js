// READ DOM
const APP = document.querySelector(".app");

// Import URL from data.Json
const url = "./data.json";

    /* 
        Step 1: fetch(url) => make API call => server => Promise
    */



// Async/Await Function Style
const fetchAllProduct = async () => {
    try {
        // Before get Data, Get Response First
        const response = await fetch(url);
        // get Data from URL
        const data = await response.json();
        // Render data
        renderUI(data);
    } catch (error) {
        // Xy Ly Loi ==> Pop Up (error message)
        throw error;
    }
}



const renderUI = (data) => {
    // Render UI
    // Product sẽ tham chiếu tới từng Object {...} trong Data
    // Index sẽ lấy chỉ số của từng Object (1 -> 20 Objects)

    const result = data.map( (product) => {

        // Object Destructering
        const {name, price, id, imgSrc } = product;

        return `<div class="product">
            <h2> Number: ${id} </h2>
            <h3> ${name} </h3>
            <p> Price: ${price} </p>
        </div>`;
    });

    APP.innerHTML = result.join("---");
};


fetchAllProduct();


// Array Destructering
/* let nums = [10, 9, 6, 5]
    let [a, b] = nums
    --> a = 10, b = 9
*/