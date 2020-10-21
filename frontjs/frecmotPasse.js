$(document).ready(function (){

    // const getemailUser = (idemail) => {
    //     var settings = {
    //         "url": `http://localhost:3000/User/${idemail}`,
    //         "method": "GET",
    //         "timeout": 0,
    //       };
          
    //       $.ajax(settings).done(function (response) {
    //         console.log(response);
    //         const events = $('#idmail');
    //         response.forEach((item) => {
    //           console.log(item);
    //             events.append(`${item.email} - ${item.password}`);
             
    //         });
    //       });
    // }

    // getemailUser("admin@gmail.com");

       // SUBMIT FORM
       $("#formulaire").submit(function(event) {
        // Prevent the form from submitting via the browser
        console.log("Submit!!");
        event.preventDefault();
        processData();
    });
});

function processData(){

  const form2 = $("#formulaire");
  const form = document.getElementById("formulaire")
  console.log("FORM: ", form, "TYPE:",typeof(form));
//   var mailUser = document.getElementById("idmail").value;///////
 //var autreText = document.getElementById("autreText").value;///////
  //console.log(mailUser);
  //console.log(typeof mailUser);

  var data = {};
      data.username = form.username.value;
      data.email = form.email.value;
    //   data.phone = form.telephone.value;
    //   data.mail = form.courriel.value;
    //   data.country = form.pays.value;
    //   if (data.country == "Canada") {
    //     data.state = form.province.value;
    //   } 
    //   //data.state = form.province.value;
    //   // data.curseId = $('.curseId:checked').val();
    //   data.curseId = checkboxSelectionne();
    //   if (autreText.length > 0) {
    //     data.moyenCommunication = autreText;
    //     //data.moyenCommunication = $('.moyenCommunication:checked').val();
    //   } else {
    //     data.moyenCommunication = checkboxCommunicationSelectionne();
    //   }
    //   //data.moyenCommunication = $('.moyenCommunication:checked').val();
    //   data.consentMessage = form.consent.value;
    //   //console.log(data);
  submitForm(data);

}

function submitForm(data){
  console.log('DATA:', data);
  var settings = {
      "url": "http://localhost:3000/User",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify(data)
    //   "data": mailUser
  };
  console.log(settings);
    
  $.ajax(settings).done(function (response) {
    console.log(response);
    if (response.success){
        alert("Le mot de passe a été envoyée avec succès à l'adresse électronique enregistrée");
        document.getElementById('formulaire').reset();
    }
    else
        alert("Il y a eu une erreur interne dans le serveur")
    });
}