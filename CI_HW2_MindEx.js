// Problem 1
/* Implement a function that satisfies the following requirement:

- Input: the Integer number
- Output: the reverse of input number
*/

console.log("HOMEWORK 2: PROBLEM 1")

// function reverseNumber (nums) {
//     let reverseNum = 0;
//     if (nums > 0) {
//         reverseNum = (reverseNum * 10) + (nums % 10);
//         nums = Math.floor(nums / 10);
//     } if (nums < 0) {
//         let numsPositive = (nums * (-1));
//         return (numsPositive * (-1));
//     }
//     return reverseNum;
    
// }


// console.log(reverseNumber(123)); // 321
// console.log(reverseNumber(-123)); // -321
// console.log(reverseNumber(1111)); // 1111
// console.log(reverseNumber(0)); // 0


// Problem 2: Roman number to Integer number
const RomanIntChart = (RomanNum) => {
    switch (RomanNum) {
        case "I": 
            return 1;
        case "V": 
            return 5;
        case "X": 
            return 10;
        case "L": 
            return 50;
        case "C": 
            return 100;
        case "D": 
            return 500;
        case "M": 
            return 1000;
        default: 
            return 0;  
    }
}


function romanToInt(str) {
    if (str == null) {
        return 0;
    }

    // str = "III", str.charAt(0) = I
    // RomanIntChart(I) --> case "I" --> 1
    // so num = 1
    var num = RomanIntChart(str.charAt(0));
    let back = ""; 
    let front = "";

    for (let i = 1; i < str.length; i++) {
        back = RomanIntChart(str.charAt(i));
        front = RomanIntChart(str.charAt(i-1));

        if (front >= back) {
            num = num + back;
        } else {
            num = back - num;
        }
    }
    return num;
}


console.log("HOMEWORK 2: PROBLEM 2");
console.log("Result of III: ", romanToInt("III")); // 3
console.log("Result of IV: ", romanToInt("IV")); // 4
console.log("Result of IX: ", romanToInt("IX"));  // 9
console.log("Result of LVIII: ", romanToInt("LVIII")); // 58 (L = 50, V = 5, III = 3)
console.log("Result of VI: ", romanToInt("VI")); // 6



// Problem 3: Build a website that satisfies the following requirements:

const url = "https://60ae0d5e80a61f00173324bc.mockapi.io/products";

const fetchAllDevice = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderUI(data);
    } catch (error) {
        throw error;
    }
}

const renderUI = (data) => {
    const result = data.map( (product) => {
        const {id, errorDescription, name, sku, image, color} = product;
        return `<div class="Device">
        <img class="DeviceImage" src="${image || "https://product.hstatic.net/200000227393/product/qa43q60aa_5f50862c22fc4598b14e8f87bd01e614_grande.jpg"}" alt="${name}">

        <div class="DeviceInfor">
            <h4 class="DeviceName"> <b>Name:</b> ${name}</h4>
            <p class="Error"> <b>Error:</b> ${errorDescription} </p>
            <p class="SKU"> <b>SKU: </b> ${sku} </p>
            <p class="ID"> <b>ID: </b> ${id} </p>
            <p class="Color"> <b>color: </b> ${color || 0} </p>
        </div>
    </div>`

        
    });

    // Append the div Device into parents and output in html
    let ReadDevice = document.getElementById("DevicesContainer");
    ReadDevice.innerHTML = result.join("");
    
}

// Solution 2
// const renderUI = (data) => {
//     const result = data.map( (product) => {
//         let functionDevice = DeviceInformation(product);
//         return functionDevice;
//     });
//     let ReadDevice = document.querySelector(".Device");
//     ReadDevice.innerHTML = result.join('');
// }



// function DeviceInformation (device) {
//     let Device_Container = document.createElement("div");
//     Device_Container.setAttribute("class", "Device");


//     let Device_Image = document.createElement("img");
//     Device_Image.setAttribute("class", "DeviceImage");
//     Device_Image.src = device.image;

//     Device_Container.appendChild(Device_Image);

//     // A child div (DeviceInfor) of parents div (Device)
//     let Device_Infor = document.createElement("div");
//     Device_Infor.setAttribute("class", "DeviceInfor");


//     let DeviceName = document.createElement("h4");
//     DeviceName.setAttribute("class", "DeviceName");
//     DeviceName.innerText = "Name: " + device.name;

//     let DeviceError = document.createElement("p");
//     DeviceError.setAttribute("class", "Error");
//     DeviceError.innerText = "Error: " + device.errorDescription;

//     let DeviceSKU = document.createElement("p");
//     DeviceSKU.setAttribute("class", "SKU");
//     DeviceSKU.innerText = "SKU: " + device.sku;

//     let DeviceID = document.createElement("p");
//     DeviceID.setAttribute("class", "ID");
//     DeviceID.innerText = "ID: " + device.id;

//     let DeviceColor = document.createElement("p");
//     DeviceColor.setAttribute("class", "Color");
//     DeviceColor.innerText = "Color: " + device.color;


//     Device_Infor.appendChild(DeviceName);
//     Device_Infor.appendChild(DeviceError);
//     Device_Infor.appendChild(DeviceSKU);
//     Device_Infor.appendChild(DeviceID);
//     Device_Infor.appendChild(DeviceColor);

//     Device_Container.appendChild(Device_Infor);

//     // Read DOM of Whole Container
//     let ContainerOfDevices = document.getElementById("DevicesContainer");
//     ContainerOfDevices.appendChild(Device_Container);
// }

fetchAllDevice();