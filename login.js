function validate()
{
    if(   document.getElementById("text1").value == "shubhi"
       && document.getElementById("password").value == "shubhi@123" )
    {
        alert( "validation succeeded" );
        location.href="dashboard.html";
    }
    else
    {
        alert( "validation failed try again" );
        location.href="login.html";
    }
}
    function show(){
      var password = document.getElementById("password");
      var icon = document.querySelector(".fas")

      // ========== Checking type of password ===========
      if(password.type === "password"){
        password.type = "text";
      }
      else {
        password.type = "password";
      }
    }
    