    // WEEK 2: JS CODE INTENSIVE


// 1. CALLBACK FUNCTION
    // is a functionA passed as a parameter of functionB --> functionA (functionB) {...}
    // When passes, it call other function

function FirstFunction(parameter) {
    parameter();  // Callback function, as parameter() = SecondFunction()
}

function SecondFunction(name) {
    console.log("Hello! My name is", name);
}

FirstFunction(SecondFunction); // --> passes Second Func in FirstFunc para


// 2. SYNCHRONOUS/ ASYN

    // Sync: Đồng Bộ (console.log, ....)
    // Asyn: Bất Đồng Bộ (ex: fetch, setTimeOut, setInterval,...)

    // 3 Processes go through: 
        // Callstack --> Web APIs --> Callback Queue

        // Sync function will be executed First, 
        // Asyn function will be executed after Syns function done

        // Async Function will be waited in Callback Queue till Sync done, then return back to CallStack stage.



// 3. PROMISE

    // Reject xảy ra trong trường hợp bị lỗi về lấy API trong hàm Promise
    // Sau đó nó sẽ execute .catch 


const promise = new Promise (
    // Executor Function
    function (resolve, reject) {
        // Login to handle async event

        // If: 
        // Sucess --> Resolved()
        resolve([
            {id: 1, country: "Vietnam"},
            {id: 2, country: "USA"}
        ]);

        // If:
        // Failure --> Reject()
        reject("Bad connection");
    }
);


// Promise Chain
promise

    // Case of Resolve
    .then(function (data) {
        let result = data.map (NewWorld => {
            return {
                ...NewWorld,
                Welcome : `Hello, ${NewWorld.country}`,
            }
        })
        return result;
    })
    .then (function (output) {
        console.log("Hello then thu 2", output);
    })

    // Case of Reject
    .catch(function (error) {
        console.log(error);
    })
    .finally(function (state) {
        console.log("Completed!");
    });
 


// 4. ASYNC/AWAIT

// Async Function
const fetchAllCourse = async () => {
    return "Chao MAY!";
};


// Cách Cũ 
// fetchAllCourse().then((data) => {
//     console.log(data);
// });

// Cách Mới 
const getData =  async () => {
    const data = await fetchAllCourse();
    console.log(data);
};
getData();
// Line 102 là cách viết ngắn của 95-96


// -------------------------------------------
// Call API with fetch (bất đồng bộ)
// API: Application Programming Interface



const url = "https://phunuketnoi.com/mon-ngon-moi-ngay.html";

// Solution then(), catch()
/* const fetchDataa = () => {

    // trả về đối tượng Promise, từ Success --> Resolved()
    fetch(url)   

        // Nhận data của Resolved() là dùng then
        // Nhưng url nhận được sau fetch là Response, --> biến đổi qua data
        .then(data => {
            // Trả về data sau khi đổi từ Response sang Data
            return data.json();
        })
        .then((data) => {
            console.log(data);
            // RenderUI;
        })
        .catch(error => {
            console.log("Problem occurs!", error);
        });

}; */

// Solution 2 về async/await của fetch API 
const fetchDataa =  async () => {
    // return Response when fetch URL
    try {
        const response = await fetch(url);

        // return Data when use Response.json()
        // cách viết ngắn: await thứ 2 là then thứ 2 of line 128-130
        const data = await response.json();
        console.log("So data:", data);
    } catch (error) {
        throw error;
    }

};

// Chục cái then = chục cái await 

fetchDataa();


//---------------------------------------------------
// 4. OOP: ORIED OBJECT PROGRAMMING: LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG
    // ES6: 2015: map, class, ....
    // Ngôn ngữ lập trình hướng sự kiện, lập trình dựa trên sự kiện của người dùng
    // Ra đời class:
    // LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG: là Lấy đối tượng là chủ điểm chính 

    // Object-Oriented Programming:
    // Object: Đối tượng (con người, động vật)
    // Methods: Những hành động mà đối tượng đó có thể làm (ăn, ngủ, nghỉ)
    // Attribute: đặc tính thể hiện đối tượng (chiều cao, cân nặng, màu da)

    // 4 Main Principles of OOP:
        // a. Inheritance
        // b. Abstraction
        // c. Polymorphism
        // d. Encapsulation



// Cách Viết cũ của class (trước ES6)
function Course(name, price) {
    // Attribute
    this.name = name;
    this.price = price;

    // Method
    this.showCourseInfo= function () {
        console.log(`Course: ${this.name} - Price: ${this.price}`);
    }

}

    // Khai bao một đối tượng mới
const jsCourse = new Course("ReactJS", 20);
jsCourse.showCourseInfo();

const phpCourse = new Course("PHP Course", 100);
phpCourse.showCourseInfo();



// Cách viết mới của class (Sau ES6):
class Course2 {
    // Hàm khởi tạo 
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Method
    showCourseInfo() {
        console.log(`Course: ${this.name} - Price: ${this.price}`);
    }
}

const jsCourse1 = new Course2("ReactJS", 20);
jsCourse1.showCourseInfo();

const phpCourse1 = new Course2("PHP Course", 100);
phpCourse1.showCourseInfo();

    // TypeScript: cũng là Javascript, nhưng mà nó thêm Type Checking

    // Method có 2 dạng: Public Method và Private Method
    // public: function()
    // private: #function()

class Restaurant {
    // Private Method
    #private_stuff() {
        console.log("Private");
    }

    // Public Method
    public_stuff() {
        this.#private_stuff();
    }
}

const restaurant = new Restaurant();
restaurant.public_stuff();
