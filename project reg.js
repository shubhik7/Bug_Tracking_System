console.log("Register.it")

// let form=document.getElementById("RegProject-form")
// function handleForm(e){
//   e.preventDefault()
// }
// form.addEventListener("submit",handleForm)

function validate(){
    let Project_ID = document.forms["Projectregistration"]["Project_ID"].value;
    let Project_Name = document.forms["Projectregistration"]["Project_Name"].value;
    let Start_Date = document.forms["Projectregistration"]["Start_Date"].value
    let End_Date = document.forms["Projectregistration"]["End_Date"].value
    let Project_Status = document.forms["Projectregistration"]["Project_Status"].value;
    let Assigned_Manager_ID = document.forms["Projectregistration"]["Assigned_Manager_ID"].value;
    console.log(Start_Date,End_Date)
    const sDate=new Date(Start_Date)
    const eDate=new Date(End_Date)
    console.log(sDate.getTime(),eDate.getTime())
    if(sDate.getTime()>eDate.getTime()){
        console.log("Error")
        document.getElementById("error").textContent =
          "Please enter proper Start date and End date";
        return false;
      }
      document.getElementById("error").textContent =""
      console.log("Registered")
    
alert("Project Registered Successfully")
}