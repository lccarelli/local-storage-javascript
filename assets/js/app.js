
//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listener

eventListener();

function eventListener () {
     //cuando se envía el formulario
     document.getElementById('formulario').addEventListener('submit', agregarTweet);
}

//Funciones

//añadir tweet del formulario
function agregarTweet(e){
     e.preventDefault();
     console.log('formulario enviado');
     
     //leer el valor del text área
     const tweet = document.getElementById('tweet').value;
     console.log(tweet);

     //crear elemento y añadirlo a la lista
     const li = document.createElement('li');     //creando el li
     li.innerText = tweet;    //agregadno el contenido del tweet al li
     listaTweets.appendChild(li);  //agregando el li a listaTweets
}
