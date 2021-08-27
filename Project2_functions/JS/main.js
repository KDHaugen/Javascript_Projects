function sample_function(){                //Defining a function and giving it a name.
    var stringA = "This is the sample string,";  //Creating a string variable called stringA

    stringA += " with an additional string concatenated on." //Concatenated an additional string to variable stringA

    var outcome = stringA.fontcolor("red"); //Assigning a red color the StringA using the fontcolor method

    document.getElementById("sample_string").innerHTML = outcome; //Putting the value of outcome in the HTML element with "sample_string"
}