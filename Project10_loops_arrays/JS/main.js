function double_100(){
    var Digit = "";
    var base1 = 1;
    while (base1 < 100){
        Digit += "<br>" + base1;
        base1 *= 2;
    }
    document.getElementById("loop").innerHTML = Digit;

}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_Function(){
    var champion_Name = [];
    champion_Name[0] = "Lux";
    champion_Name[1] = "Garen";
    champion_Name[2] = "Morgana";
    champion_Name[3] = "Elise";
    champion_Name[4] = "Kiella";
    document.getElementById("Array").innerHTML = "The name of a champion is " + champion_Name[2] + ".";
}

function constant_function() {
    const X = 10;
    //X = 100;
    document.getElementById("Constant").innerHTML = "5 + 5 = " + X;
}

function let_function(){
    var L = 100;
    document.getElementById("Let_show").innerHTML = L + "<br>";
    {
        let L = 200;
        document.getElementById("Let_show1").innerHTML = L + "<br>";
    }
    document.getElementById("Let_show2").innerHTML = L;
}

/*function return_function(){
    return 10;
}
document.getElementById("return_show").innerHTML = return_function();*/


let dog = {
    breed: "Husky",
    size: "large",
    age: "4",
    description : function(){
        return "This dog is a " + this.size + "," + this.age + "year old," + this.breed + ".";
    }
};
document.getElementById("dog_object").innerHTML = dog.description();