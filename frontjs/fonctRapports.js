$(document).ready(function (){

    // SUBMIT FORM
    $("#formulaire").submit(function(event) {
     // Prevent the form from submitting via the browser
     console.log("Submit!!");
     event.preventDefault();
     processData();
 });

 $("#formulaire2").submit(function(event) {
   // Prevent the form from submitting via the browser
   console.log("Submit!!");
   event.preventDefault();
   processData2();
});

});

function processData(){
//console.log(x)
// const form2 = $("#formulaire");
const form = document.getElementById("formulaire")
console.log("FORM: ", form, "TYPE:",typeof(form));

var data = {};
   data.debut = form.debut.value;
   data.fin = form.fin.value;
submitForm(data);
}

function processData2(){
   //console.log(x)
   // const form2 = $("#formulaire");
   const form = document.getElementById("formulaire2")
   console.log("FORM: ", form, "TYPE:",typeof(form));
   
   var data = {};
      data.debut = form.debut.value;
      data.fin = form.fin.value;
   submitForm2(data);
   }

function submitForm(data){
console.log('DATA:', data);
var settings = {
   "url": "http://localhost:3000/Inscription",
   "method": "POST",
   "timeout": 0,
   "headers": {
     "Content-Type": "application/json"
   },
   "data": JSON.stringify(data)
};
console.log(settings);
 
$.ajax(settings).done(function (response) {
 console.log(response);

 if (response.success){
    alert("le rapport inscription a été généré avec succès");
 }
 else
     alert("il n'y a pas d'informations relatives aux dates saisies.")
 });
}

function submitForm2(data){
   console.log('DATA:', data);
   var settings = {
      "url": "http://localhost:3000/Programme",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(data)
   };
   console.log(settings);
    
   $.ajax(settings).done(function (response) {
    console.log(response);
   
    if (response.success){
       alert("le rapport programme a été généré avec succès");
    }
    else
        alert("il n'y a pas d'informations relatives aux dates saisies.")
    });
   }