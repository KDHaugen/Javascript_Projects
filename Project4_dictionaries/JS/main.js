function dictionary_function(){                //Defining a function and giving it a name dictionary_function().

    var Champion = {                            //Create Champion Variable
        Name:           "Lux",                  //Assign Champion.Name 
        Lane:           "Mid/Support",          //Assign Champion.Lane
        Damage_Type:    "Ability Power",        //Assign Champion.Damage_Type
        Power_Tier:     "B"                     //Assign Champion.Power_Tier
    };            
    delete Champion.Name;                       //Removing Champion.Name to return "undefined"

    document.getElementById("Dictionary").innerHTML = Champion.Name; //Putting the value of Champion.name in the HTML element with "Dictionary"
}