$(document).ready(function (){

    // SUBMIT FORM
    $("#formulaire").submit(function(event) {
     // Prevent the form from submitting via the browser
     console.log("Submit!!");
     event.preventDefault();
     processData();
 });
});

function processData(){

// const form2 = $("#formulaire");
const form = document.getElementById("formulaire")
console.log("FORM: ", form, "TYPE:",typeof(form));

var data = {};
   data.debut = form.debut.value;
   data.fin = form.fin.value;
submitForm(data);

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
     alert("le rapport a été généré avec succès");
     //document.getElementById('formulaire').reset();
 }
 else
     alert("il n'y a pas d'informations relatives aux dates saisies.")
 });
}