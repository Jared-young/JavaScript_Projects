// PROJECT8_Contact Method SUBMISSION ASSIGNMENT  

// to put together strings of words to make a sentance 
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentance = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentance;
}

// function to slice a sentance 
function slice_method(){
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //first,last character 
    document.getElementById("Slice").innerHTML = Section;
}

// make a string upper case
function UpperCase_method(){
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var Case = Sentence.toUpperCase();
    document.getElementById("Upper").innerHTML = Case;
}

//find the position of a word
function Search_method(){
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var searchTerm = "play"
    var search = Sentence.search(searchTerm);
    document.getElementById("Search").innerHTML = search;
}

//Print a sting of numbers
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

function Fixed_Method() {
    var Z = 12938.3012987376112;
    document.getElementById("Fixed").innerHTML = Z.toFixed(2);
}

function Value_Method() {
    var Z2 = 12938.3012987376112;
    document.getElementById("Value").innerHTML = Z2.valueOf(8);
}