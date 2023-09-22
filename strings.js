function CheckInput()
{

    var firstName = document.getElementById("fname").value;
    var LastName = document.getElementById("lname").value;
    var Name = firstName +  " " + LastName;
    var len = Name.length;
    var number = document.getElementById("number").value;
    var len2 = number.length;
    if (len >20)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid name length";
    }
    else if (len2 == 10)
    {
        document.getElementById("loginStatus").innerHTML =" Valid login!!!";
    }
    else
    {
        document.getElementById("loginStatus").innerHTML = "Invalid phone number";
    }

}