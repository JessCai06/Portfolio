var x, y, z;
let A, B, C;

x = 5;
y = 7;
z = x + y;

A = "Hello ";
B = "world!";
C = A + B;
console.log(C);

SumNPrint(x,y);
SumNPrint(A,B);

if (C.length < z){
    console.log(z);
}
else if (C.length > z){
    console.log(C);
}
else{
    console.log("good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// L1.forEach(findTheBanana);
// L2.forEach(findTheBanana);



function findTheBanana(item, index, arr){
    if (item == "Banana"){
        alert("found the Banana at index " + i);
    }
}

function findTheBanana(L){
    for (var i = 0; i< L.length; i ++){
        if (L[i] == "Banana"){
            alert("found the Banana at index " + i);
        }
    }
    alert("couldn't find banana :(");
}
//sum of x1 and x2
function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
    return x3;
}
function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    console.log(h);
    const E = document.getElementById("greetings");
    let greeting = "";

    if (h < 5) {
        greeting = "Good night";
    } else if (h < 12) {
        greeting = "Good morning";
    } else if (h < 18) {
        greeting = "Good afternoon";
    } else if (h < 20) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    E.innerHTML = `${greeting}! I am Jessica`;
}

// Ensure the function runs when the page loads
window.onload = greetingFunc;
