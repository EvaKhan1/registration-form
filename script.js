document.getElementById("register").addEventListener("click",function(event){
    event.preventDefault();
    checkData();
});

var username=document.getElementById("name");
var email=document.getElementById("email");
var number=document.getElementById("number");
var password=document.getElementById("password");

function checkData(){
    var usernameValue=username.value.trim();
    var passwordValue=password.value.trim();
    var emailValue=email.value.trim();
    var numberValue=number.value.trim();

    if(usernameValue==""){
        setError(username,"Name is required.");
    }
    if(emailValue==""){
        setError(email,"Please enter your email id.");
    }
    if(passwordValue==""){
        setError(password,"password is required.");
    }
    if(numberValue==""){
        setError(number,"Please enter your mobile number.");
    }
    
}

function setError(u,msg){
    var parentBox=u.parentElement;
    parentBox.className="input-box .error";
    var span =parentBox.querySelector(".error");
    span.innerText=msg;
}