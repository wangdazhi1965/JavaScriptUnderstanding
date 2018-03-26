function a() {

    function b() {
        // var myVar;
        console.log(`b myVar is ${myVar}`);
    }
    
    // var myVar = 2;
    b();
    console.log(`a myVar is ${myVar}`);
}


console.log(`global myVar before initalizing ${myVar}`);
var myVar = 1;
a();
console.log(`global myVar is ${myVar}`);