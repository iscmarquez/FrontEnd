$(document).ready(function (){

    const getSpeakerChat = () => {
        var settings = {
            "url": `http://localhost:3000/Speaker`,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            const events = $('#cardsContainer');
            response.forEach((item) => {
              console.log(item);
                events.append(`<article class="col">
                <div class="card">
                  <div class="card-header">${item.name}</div>
                  <div class="card-body">
                      <img class="card-img" src= "${item.photoLink}" alt="Conferencista: ${item.name}" width="200" height="250"/>
                    <p>${item.description}</p>
                    <a class="btn btn-warning" href="FONCT3.html?linkchat=${item.linkchat}">Chat</a>
                  </div>
                </div>
              </article>`);
             
            });
          });
    }

    getSpeakerChat();

    
});

