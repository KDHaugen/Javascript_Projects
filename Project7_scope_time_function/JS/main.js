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