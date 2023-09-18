// Comparisons type coercion

function my_Function() {
    //document.getElementById("Test").innerHTML = 0/0;
    //document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById("Test").innerHTML = isNaN('007');
}

//Infinity and negative infinity
document.write(2E310);
document.write(-3E310);

//is 10>2 is 10<2
document.write(10>2);
document.write(10<2);

//preforms calculations in console
console.log(2+2);
console.log(2<2);

//is 10 = 10 or is 10 = 2
document.write(10 == 10);
document.write(10 == 2);

X = 10;
Y = 10;
document.write(X === Y);

X = 82;
Y = "82";
document.write(X === Y);

A = "Magnus";
B = "Magnus";
document.write(A === B);

A = "Magnus";
B = "Magnus3";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}