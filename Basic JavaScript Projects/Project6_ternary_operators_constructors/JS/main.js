// Ternary Operators Construction

//function Ride_Function() {
  //  var Height, Can_ride;
    //Height = document.getElementById("Height").value;
    //Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    //document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
//}

//function Vote_Function() {
  //  var Age, Can_vote;
    //Age = document.getElementById("Age").value;
    //Can_vote = (Age > 17) ? "You are old enough":"You are too young to";
    //document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
//}

//function Vehicle(Make, Model, Year, Color) {
   // this.Vehicle_Make = Make;
    //this.Vehicle_Model = Model;
    //this.Vehicle_Year = Year;
    //this.Vehicle_Color = Color;
//}
//var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
//var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
//var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//function myFunction() {
  //  document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
//}

//function myFunction() {
  //  document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
//}


//function Person(firstName, lastName, age) {
  //  document.getElementById("New_and_This").innerHTML ="";
    //this.firstName = firstName;
    //this.lastName = lastName;
    //this.age = age;
    
   // this.getFullName = function() {
 //   return this.firstName + " " + this.lastName;
    //};
//}

// Create Person objects
//var person1 = new Person("John", "Doe", 30);
//var person2 = new Person("Alice", "Smith", 25);

// Access properties and methods of the objects
//document.write(person1.firstName); // "John"
//document.write(person2.getFullName()); // "Alice Smith"

function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
