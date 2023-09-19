// PROJECT7_SCOPE_TIME_FUNCTION SUBMISSION ASSIGNMENT  

//Declaring a global Variable
var globalvariable = "this is the whole world";

function fun1(){
    console.log(globalvariable);
}

function fun2(){
    var localvariable = "This is just a small part";
    console.log(localvariable);
}

//Code with error in it
function checknumber(number){
    var inputElement = document.getElementById("userInput");
    var Answer
    if (number > 0) {
        document.getElementById("Write your number").innerHTML = Answer;
    }
}
//corrected Code
function checknumber(){
    var inputElement = document.getElementById("userInput");
    if (number > 0) {
        document.getElementById("Write your number").innerHTML = "your number is positive!";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is afternoon";
    }
    else if (Time <= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}