var X = 10;

function local_Function(){
    var Y = 10;
    document.write(10 * X +"<br>");
    document.write(10 + Y);
    //document.write(10 / Z);
}

function GN_function(){
    if(new Date().getHours() > 22){
        document.getElementById("GN_message").innerHTML = "Good night Kyle."
    }else{
        document.getElementById("GN_message").innerHTML = "Stay up and work Kyle."
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon."
    }else{
        Reply = "It is Evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}