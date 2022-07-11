function submit()
{
var username = document.getElementById("u1").value;
var password = document.getElementById("p1").value;
if(username =="" && password=="")
{
    alert("Enter Username and password");
}
else if ( username == password)
{
alert ("Login successfully");
window.location = "index1.html"; // Redirecting to other page.
return false;
}
else{
    alert ("Refresh the page and enter username and password same");
document.getElementById("u1").disabled = true;
document.getElementById("p1").disabled = true;
return false;
}
}

function mail()
{
    var username = document.getElementById("u1").value;
var password = document.getElementById("p1").value;
if(username =="" && password=="")
{
    alert("Enter Username and password");
}
var pmail = document.getElementById("m1").value;
var cmail = document.getElementById("m2").value;
if(pmail =="" && cmail=="")
{
    alert("Enter Mail and Confirm mail");
}
else if(pmail == cmail)
{
    alert("Created Successfully");
    window.location = "index.html";
}
else
{
    alert("Enter E-Mail & Confirm E-Mail the same");
    window.location = "form.html";
}
}