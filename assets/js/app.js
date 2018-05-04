
//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listener

eventListener();

function eventListener () {
     //cuando se envía el formulario
     document.getElementById('formulario').addEventListener('submit', agregarTweet);

     //borrar tweets
     listaTweets.addEventListener('click', borrarTweet);
}

//Funciones

//añadir tweet del formulario
function agregarTweet(e){
     e.preventDefault();
     console.log('formulario enviado');
     
     //leer el valor del text área
     const tweet = document.getElementById('tweet').value;
     console.log(tweet);

     //crear boton eliminar
     const botonBorrar = document.createElement('a');  //creamos etiqueta <a> llamada botonBorrar
     botonBorrar.classList = 'borrar-tweet';  //le agregamos a la etiqueta <a> una clase llamada "borrar-list"
     botonBorrar.innerText = 'X';  //agregamos "x" como contenido al boton


     //crear elemento y añadirlo a la lista
     const li = document.createElement('li');     //creando el li
     li.innerText = tweet;    //agregadno el contenido del tweet al li
     li.appendChild(botonBorrar);  //agregamos el boton al li
     listaTweets.appendChild(li);  //agregando el li a listaTweets

     //añadir al local storage
     agregarTweetLocalStorage(tweet);
}

//elimina tweet DOM
function borrarTweet(e){
     e.preventDefault();
     console.log('diste click en la lista');

     if (e.target.className === 'borrar-tweet'){
          console.log (e.target.parentElement.remove());
          alert('tweet eliminado');
          
     }

}

//agrega tweet local storage
function agregarTweetLocalStorage(tweet){
     let tweets; //lee todos los tweets

     tweets = obtenerTweetsLocalStorage();

     //añadir el nuevo tweet
     tweets.push(tweet);

     //convertir de string a arreglo de local storage
     localStorage.setItem('tweets', JSON.stringify(tweets));


}

//lee los tweets de local storage y arma un arreglo para guardarlos
function obtenerTweetsLocalStorage(){
     let tweets;
     //revisamos los valores de local storage
     if (localStorage.getItem('tweets')=== null){
          tweets = [];
     }else{
          tweets = JSON.parse(localStorage.getItem('tweets'));
     }
     return tweets;
}