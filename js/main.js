var signupNameInput = document.getElementById('signupName') 
var signupPasswordInput = document.getElementById('signupPassword') 
var signupEmailInput = document.getElementById('signupEmail') 
var signinEmailInput = document.getElementById('signinEmail') 
var signinpPasswordInput = document.getElementById('signinPassword') 



allUsers = [];

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


   localStorage.setItem("user" , JSON.stringify(allUsers));


        allUsers.push(user);
        console.log(user);
        document.getElementById('msgToUser').innerHTML = 'success ...';
        // window.location.replace("./index.html");
        setTimeout(function() {
            window.location.href = "./index.html";
         }, 2000);
 
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
var email = signupEmailInput.value

for( var i = 0 ; i< allUsers.legnth ; i++)
{
    if(email == allUsers[i].email)
    {
       console.log("allready..")
        return true
    } 
    else {
        console.log("email")
        return false
    }

}

}

// document.querySelector('loginBtn').addEventListener( 'click', signinChicker) ;


function signinChicker(){

    for(var i =0 ; i<allUsers.legnth ; i++)
    {
        if(signinEmailInput.value == allUsers[i].email && signinpPasswordInput.value == allUsers[i].password)
{
    console.log("logging in")

    setTimeout(function() {
        window.location.href = "./welcome.html";
     }, 2000);
}
else{
    document.getElementById('loginMsgToUser').innerHTML = 'invalid email or password';
    console.log("logging in faild")


}


    }

}

