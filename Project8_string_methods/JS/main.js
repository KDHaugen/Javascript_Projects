

function conca_Function(){
    var firstHalf = "The first half of ";
    var secondHalf = "this two part sentence";
    var completeSentence = firstHalf.concat(secondHalf);
    document.getElementById("conca_String").innerHTML = completeSentence;
}

function slice_Function(){
    var whole = "0123456789";
    var sev_nine = whole.slice(7,10);
    document.getElementById("seven_to_nine").innerHTML = sev_nine;
}

function cap_Function(){
    var statement = "Go home!";
    var yelled_statement = statement.toUpperCase();
    document.getElementById("yelled").innerHTML = yelled_statement;
}

function numToString_Function(){
    var number = 200;
    document.getElementById("ToString").innerHTML = number.toString();
}

function precise_Function(){
    var number = 987654321.123456789;
    document.getElementById("preciseNum").innerHTML = number.toPrecision(11);
}

function fixed_Function(){
    var number = 987654321.123456789;
    document.getElementById("fixedNum").innerHTML = number.toFixed(3);
}