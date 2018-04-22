function a() {

    function b() {
        // var myVar;
        console.log(`b myVar is ${myVar}`);
    }
    
    console.log(`a myVar is ${myVar}`);
    b();
    var myVar = 2;
    
}


console.log(`global myVar before initalizing is ${myVar}`);
var myVar = 1;
a();
console.log(`global myVar is ${myVar}`);