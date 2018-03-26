console.log(a);
b();

var a;

if (a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is defined');
}

function b() {
    console.log('Called b!');
}

