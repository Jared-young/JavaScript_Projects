// Dictionary Functions

function my_Dictionary() {
    var Animal = {
        //Key Value Pairs
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: "5",
        Sound:"Bark!"
    };
    delete Animal.Sound; //added delete function to remove animal sound from dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}