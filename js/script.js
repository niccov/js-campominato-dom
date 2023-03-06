/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
________________________________________________________
-memorizza la variabile del button
-creare un event listener 
  -CREARE UNA TABELLA CON 10X10 dove in ogni cella c'è un numero progressivo da 1 a 100

*/

let buttonElement = document.getElementById("play-button");

let gridElement = document.getElementById("container-grid");

let selectElement = document.getElementById("level-select");

let bombElement = []

buttonElement.addEventListener("click", function() {
    
    //creo una variabile per il valore che mi restituisce select
    const level = selectElement.value;
    
    //? SE select mi restituisce "level 1"
    if(level == "level 1") {
        //creo una variabile per fermare il ciclo "crea caselle" a 100
       let cellNumber = 100;
    
       //creo un ciclo FOR che mi crei una cella ogni giro
       for(i = 0; i < cellNumber; i++) {

           //creo una variabile con la function
           let newSquareElement = createSquare(i + 1);
           // aggiungo una classe a gridElement perle dimensioni della griglia
           gridElement.classList.add("size-grid-level-one");
           //appendo la variabile nel documento HTML
           gridElement.append(newSquareElement);

           //aggiungo un event listener per cliccare sul quadrato 
           newSquareElement.addEventListener("click", function() {
               //con l'aggiunta della classe blue, al click il quadrato diventa blu
               newSquareElement.classList.add("blue");
               //stampa in console il numero del quadrato cliccato
               console.log("La cella cliccata è la numero " + newSquareElement.innerText);
           })
       }

    } else if(level == "level 2") {
        //creo una variabile per fermare il ciclo "crea caselle" a 81
        let cellNumber = 81;
    
       //creo un ciclo FOR che mi crei una cella ogni giro
       for(i = 0; i < cellNumber; i++) {

           //creo una variabile con la function
           let newSquareElement = createSquare(i + 1);
           // aggiungo una classe a gridElement perle dimensioni della griglia
           gridElement.classList.add("size-grid-level-two");
           //appendo la variabile nel documento HTML
           gridElement.append(newSquareElement);

           //aggiungo un event listener per cliccare sul quadrato 
           newSquareElement.addEventListener("click", function() {
               //con l'aggiunta della classe blue, al click il quadrato diventa blu
               newSquareElement.classList.add("blue");
               //stampa in console il numero del quadrato cliccato
               console.log("La cella cliccata è la numero " + newSquareElement.innerText);
           })
       }
    
    } else if(level == "level 3") {
        //creo una variabile per fermare il ciclo "crea caselle" a 49
        let cellNumber = 49;
    
       //creo un ciclo FOR che mi crei una cella ogni giro
       for(i = 0; i < cellNumber; i++) {

           //creo una variabile con la function
           let newSquareElement = createSquare(i + 1);
           // aggiungo una classe a gridElement perle dimensioni della griglia
           gridElement.classList.add("size-grid-level-three");
           //appendo la variabile nel documento HTML
           gridElement.append(newSquareElement);

           //aggiungo un event listener per cliccare sul quadrato 
           newSquareElement.addEventListener("click", function() {
               //con l'aggiunta della classe blue, al click il quadrato diventa blu
               newSquareElement.classList.add("blue");
               //stampa in console il numero del quadrato cliccato
               console.log("La cella cliccata è la numero " + newSquareElement.innerText);
           })
       }
    }
    
})



//__________________________________________________________
//FUNZIONI 

function createSquare(text){

    //creo una variabile per un nuovo elemento div
    let newElement = document.createElement("div");
    //metto dentro il div la classe square già presente nel CSS
    newElement.classList.add("square");
    //inserisco del testo nell'elemento
    newElement.innerText = text;

    return newElement;
}                

function createRandomNumbers(max){
      // genero un numero random
  let random = Math.floor(Math.random() * (max + 1))

  // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
  return random;

}