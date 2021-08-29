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