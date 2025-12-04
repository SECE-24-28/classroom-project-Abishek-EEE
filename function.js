let a = 30;
let b = 20;

function add(a, b) {
    let sum = a + b;
    console.log(sum);
}

add(3, 5);
add(4, 5);

// Missing function added
function greting() {
    console.log("Good Morning!");
}
greting();

const addition = (a, b) => {
    return a + b;
};

let result = addition(5, 7);
console.log("The addition result is: " + result);