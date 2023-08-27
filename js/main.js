var signupNameInput = document.getElementById('signupName') 
var signupPasswordInput = document.getElementById('signupPassword') 
var signupEmailInput = document.getElementById('signupEmail') 
var signinEmailInput = document.getElementById('signinEmail') 
var signinPasswordInput = document.getElementById('signinPassword') 



allUsers = [];
if(localStorage.getItem != 'null'){
    allUsers = localStorage.getItem('allUsers')
}

function addUser()
{

var errorMsg = validateAccount()
if(errorMsg == true)
{

    var user = {
        name : signupNameInput.value ,
        email : signupEmailInput.value,
        password : signupPasswordInput.value
    
    }




        allUsers.push(user);
        // console.log(user);
        document.getElementById('msgToUser').innerHTML = 'success ...';
        localStorage.setItem("user" , JSON.stringify(allUsers));

        
        // window.location.replace("./index.html");
        // setTimeout(function() {
        //     window.location.href = "./index.html";
        //  }, 2000);
 
    // }
    // else{
    //     document.getElementById('msgToUser').innerHTML = 'email exists ... ';

    // }




}
else{
    document.getElementById('msgToUser').innerHTML = errorMsg;

    // console.log(errorMsg);
}

}


// document.getElementById().addEventListener( 'click', addUser) ;

 function validateAccount()
{
  var nameRegex = /^[A-Za-z][A-Za-z0-9_]{4,14}$/
  var emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{3}$/i
  var passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

 if(nameRegex.test(signupNameInput.value)==false){
    return " username should start with an alphabet it may contain alphabets, numbers or an underscor and be from 5 to 15 characters";
 } 
 else if (emailRegex.test(signupEmailInput.value) == false){

    return " invalid email";

 } 
 else if (passwordRegex.test(signupPasswordInput.value) ==false ){

    return " invalid password";

 } 


 else if (emailRegex.test(signupEmailInput.value) == true && checkEmailExists() == true)
{
    return " Email allready exists";

}

return true;
}



function checkEmailExists()
{
var email = signupEmailInput.value;
var pass = signinPasswordInput;

for( var i = 0 ; i< allUsers.length ; i++)
{
    if(email == allUsers[i].email && pass ==allUsers[i].password)
    {
        var x = allUsers[i].name;
        localStorage.setItem("")
       console.log("Email allready exists.")
        return true
    } 
    else {
        console.log("email")
        return false
    }

}

}


function signinChecker(){

    // setTimeout(function() {
    //     window.location.href = "./welcome.html";
    //  }, 2000);
    for(var i =0 ; i<allUsers.length ; i++)

    {
        if(signinEmailInput.value == allUsers[i].email && signinPasswordInput.value == allUsers[i].password)
{
    var x = allUsers[i].name;
    localStorage.setItem("usname", "y")
    console.log("logging in")

    setTimeout(function() {
        window.location.href = "./welcome.html";
     }, 2000);
     document.getElementById('welcomemsg').innerHTML = 'welcome '+ allUsers[i].name;

}
else{
    document.getElementById('loginMsgToUser').innerHTML = 'invalid email or password';
    console.log("logging in faild")


}


    }

}
// document.querySelector('loginBtn').addEventListener( 'click', signinChecker) ;




