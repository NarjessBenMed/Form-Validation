
document.getElementById("form-inscri").addEventListener("submit", validate_form);




   const password_condition = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}/ ;
   const email_condition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate_form()

{

let name_value= document.getElementById("name").value;
let address_value= document.getElementById("address").value;
let Email_value= document.getElementById("Email").value;
let password_value= document.getElementById("Password").value;
let comment_value= document.getElementById("Cmt").value;

 
if (name_value=== "") 
{

alert("Please enter your name ");
}
else 

if (address_value === "")
{
alert("Please enter your address ");
}
else

if (Email_value === ""){
alert("Please enter your email ");
}


else if (!email_condition.test(Email_value))
   alert ("Doesn't have a valid e-mail adress");

else
if (password_value === "")   {
alert("Please enter your password ");
  
}

else if (!password_condition.test(password_value))
   alert ("check your password, password must be a combinaison of charatacters , numbers and at least a capital letter")
      
else

if (comment_value === "")
{
alert("Please enter your comment");

console.log(comment_value);

}

}


  
