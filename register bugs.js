function validate(){
    let Bug_Name = document.forms["bugsregistration"]["Bug_Name"].value;
    let Project_ID = document.forms["bugsregistration"]["Project_ID"].value;
    let Raised_By = document.forms["bugsregistration"]["Raised_By"].value;
    let Priority_ID = document.forms["bugsregistration"]["Priority_ID"].value;
    let Bug_Desc = document.forms["bugsregistration"]["Bug_Desc"].value;
    let Bug_Status = document.forms["bugsregistration"]["Bug_Status"].value;
    let Bug_Raised_Date = document.forms["bugsregistration"]["Bug_Raised_Date"].value;
    $("form").validate({
        rules:{
          End_Date:{greaterThan: "#Start_Date"}
        }
      });
return "Bugs Registered Successfully"
}