var nameInp= document.getElementById("nameInp");

var emialInp= document.getElementById("emialInp");
var passwordInp= document.getElementById("passwordInp");
var signupInp=document.getElementById("signupInp");

var usersInp;
if(localStorage.getItem("yousef")==null){
  usersInp=[]
}
else{
  usersInp=JSON.parse(localStorage.getItem("yousef"))
}

function signUp(){
  if(userInputValidation()==true && isExist() == false ){
    var users={
      name:nameInp.value,
      email:emialInp.value,
      password:passwordInp.value
    }
    usersInp.push(users);
    localStorage.setItem("yousef",JSON.stringify(usersInp))
    var confirmMsg=document.getElementById("confirmMsg")
    confirmMsg.classList.replace("d-none","d-block")
   
  }
}
  
signupInp.addEventListener('click', function(){
  signUp()
})
    

 
    function nameValidation(){
      var nameAlert=document.getElementById("nameAlert");

      var regs=/^[A-Za-z]{3,10}(\s?[A-za-z]{3,10})?$/;

     if(regs.test(nameInp.value)==true && nameInp!="") {

      nameInp.classList.add("is-valid");
      nameInp.classList.remove("is-invalid");
      nameAlert.classList.replace("d-block","d-none");
      return true;
     }
     else{
      nameInp.classList.add("is-invalid");
      nameInp.classList.remove("is-valid");
      nameAlert.classList.replace("d-none","d-block");
      
     }
    }

    function passwordValidation(){
      var passwordAlert=document.getElementById("passwordAlert");
      var regs=/^.{5,15}$/;
      if(regs.test(passwordInp.value)==true&& passwordInp.value!=null){
        passwordInp.classList.add("is-valid");
        passwordInp.classList.remove("is-invalid");
        passwordAlert.classList.replace("d-block","d-none");
      return true;

      }
      else{

        passwordInp.classList.add("is-invalid");
        passwordInp.classList.remove("is-valid");
        passwordAlert.classList.replace("d-none","d-block");
        return false;
      }



    }
    function emailValidation(){

      var emailAlert=document.getElementById("emailAlert");
      var regs= /[a-z](@gmail)/;
      if(regs.test(emialInp.value)==true && emialInp.value !=""){
        emialInp.classList.add("is-valid");
        emialInp.classList.remove("is-invalid");
        emailAlert.classList.replace("d-block","d-none");
        

      return true;

    }
    else{

      emialInp.classList.add("is-invalid");
      emialInp.classList.remove("is-valid");
      emailAlert.classList.replace("d-none","d-block");
        return false;
    }
    }

   

   
  function userInputValidation(){

    nameValidation();
    passwordValidation();
    emailValidation();


    if(nameValidation()== true && passwordValidation()==true && emailValidation()==true){

      return true;
    }
    else{
      return false;
    }
  }

  function isExist(){
    var existAlert=document.getElementById("existAlert");
    for (var i=0; i < usersInp.length; i++){
      if(usersInp[i].name.toLowerCase() == nameInp.value.toLowerCase() || 
      usersInp[i].email.toLowerCase()== emialInp.value.toLowerCase()){
       
       
       nameInp.classList.remove("is-valid");
       emialInp.classList.remove("is-valid");
   
       existAlert.classList.replace("d-none","d-block")
       return true;
     }
     else{
       return false;
     }
    }
    
   
    
    }

    function login(){

      var LoginEmail=document.getElementById('LoginEmail');
      var LoginPassword=document.getElementById('LoginPassword');
      var loginBnt=document.getElementById('loginBnt');
      var worningmsg=document.getElementById("worningmsg");
       var successMSg =document.getElementById("successMSg");
      if(LoginEmail.value=="" || LoginPassword.value==""){

        var fillmsg=document.getElementById("fillmsg");
        fillmsg.classList.replace("d-none","d-block")
        return false;
      }
      for(var i=0; i<usersInp.length; i++)
      {

        if(usersInp[i].email.toLowerCase()==LoginEmail.value.toLowerCase() 
        && usersInp[i].password.toLowerCase()==LoginPassword.value.toLowerCase()){
      
          successMSg.classList.replace("d-none","d-block");
          localStorage.setItem("loginStorge" , usersInp[i].name)
          loginBnt.setAttribute("href","index.html")

        }
        else{
          worningmsg.classList.replace("d-none","d-block");
        }
      }
    
  
    }

    function displayUserName(){
      var userName=localStorage.getItem("loginStorge");
      document.getElementById("welcomeName").innerHTML="welcome" + userName
    }

 