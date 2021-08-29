function double_100(){
    var Digit = "";
    var base1 = 1;
    while (base1 < 100){
        Digit += "<br>" + base1;
        base1 *= 2;
    }
    document.getElementById("loop").innerHTML = Digit;

}