/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

//creazione variabile sum che è la somma di 10+20
let sum = 10+20;
//dal discord, penso sia banalmente solo questo, grazie. 


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

//sottofunzione.
const getRandomInRange = function (min, max) {
  //l'utilizzo di math.floor è per arrotondare il numero a difetto, ovvero il numero generato da math.random
  //max-min + 1 è l'intervallo
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//la mia variabile sarà il risultato di questa funzione, a cui passo i valori 0 e 20 (avrei anche potuto fare due variabili floor e roof
// e attribuire 0 e 20, ma è complicanza inutile)
let random = getRandomInRange(0, 20);



/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Matteo",       
  surname: "Di Lorenzo",    
  age: 25            
};


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills=["Java", "Javascript", "Assembly", "C", "SQL", "Python"];



/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const skilldaaggiungere = "Ruby";
me.skills.push(skilldaaggiungere);



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()




// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function(){
  const numero = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return numero;
}

const risultato = dice()

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/



//SEZIONE PER LA GENERAZIONE DI 2 NUMERO CASUALI, E ASSEGNAZIONE ALLE VARIABILI NUM1 E NUM2
const numerorandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const num1 = numerorandom(0, 100)
const num2 = numerorandom(0, 100)

//SEZIONE DELLA LOGICA PER IL RITORNO MAGGIORE
const whoIsBigger = function(numero1, numero2){
  if(num1 > num2){
    return num1;
  }
  else if(num2 > num1){
    return num2;
    //altrimenti i 2 numeri sono uguali, quindi ne ritorno uno a caso tra i 2
  } else{
    return numero1;
  }
}
const numeromaggiore = whoIsBigger(num1, num2);


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitarray = function(str){
    // Usa il metodo split per dividere la stringa in base agli spazi
    return str.split(" ");
}

const arraydadividere = "ciao a tutti come state?";
const result = splitarray(arraydadividere);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function(str, bool){
  if(bool){
    //dobbiamo togliere il primo carattere
    return str.slice(1); // Ritorna la stringa senza il primo carattere
  } else {
    // dobbiamo togliere l'ultimo carattere
    return str.slice(0, -1); // Ritorna la stringa senza l'ultimo carattere
  }
}

const stringa = "stringa";
let bool = Math.random() < 0.5; //cosi avrò che è true solo se minore di 0.5 (da 0.49999999999... compreso in giu)

let risultatoesercizio4 = deleteOne(stringa, bool) 

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function(str){
  //inizializzo una variabile result, in cui andrò ad inserire la mia stringa finale
  let result = ""; 
  //ciclo for, che andrà da 0 fino alla fine della stringa (per tutta la sua lunghezza)
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; 
      //se il char è compreso tra a e z, A e Z, oppure è uno spazio, allora posso inserire il char all'interno del risultato
      //cosi facendo, vado ad omettere tutti i caratteri numerici che posso incontrare nel percorso.

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === ' ') {
      result += char; 
    }
  }

  //rimuovo gli spazi extra lasciati dai numeri rimossi 
      //!commento personale!: se in futuro vuoi rivedere dov'è: https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
  return result.replace(/\s+/g, ' ').trim(); // Normalizza gli spazi e rimuove spazi all'inizio e alla fine

}

const stringaesercizio5 = "ho 44 cani in fila per 3 con il resto di 2"
let risultatoesercizio5 = onlyLetters(stringaesercizio5)


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/


const isThisAnEmail = function(email){
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}


const email = "email@epicode.com"
const risultatoesercizio6 = isThisAnEmail(email);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function(data){
  let giornostringa = ""; 

  switch (data) {
      case 0:
        giornostringa = "domenica";
          break;
      case 1:
        giornostringa = "lunedì";
          break;
      case 2:
        giornostringa = "martedì";
          break;
      case 3:
        giornostringa = "mercoledì";
          break;
      case 4:
        giornostringa = "giovedì";
          break;        
      case 5:
        giornostringa = "venerdì";
          break;        
      case 6:
        giornostringa = "sabato";
          break;        
      default:
        giornostringa = "giorno non valido";
  }
  return giornostringa;
}
const date = new Date()
const giornodioggi = whatDayIsIt(date.getDay())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (numero){
//la somma all'inizio è 0, e l'array è vuoto
let sum = 0;
let values = [];

  for(i=0; i<numero; i++){
    //andiamo a calcolare il risultato dalla funzione dice
    const risultato = dice();
    //la somma sarà sum + risultato
    sum = sum + risultato;
    //pushamo il valore nell'array values
    values.push(risultato); 
  }
  //ritorniamo i risultati
   return {
    sum: sum,
    values: values
  };
}

const numerodivolte = 3; //avrei anche potuto randomizzare il numero di volte
//andiamo alla funzione
const risultatoesercizo8 =rollTheDices(numerodivolte)

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function(datapassata){
  const datadioggi = new Date()
  const datapassataDate = new Date(datapassata); // Converte la stringa in un oggetto Date
  const Difference_In_Time = datadioggi.getTime() - datapassataDate.getTime();
  const Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

}

const datapassata = '2023-10-18';
howManyDays(datapassata)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodatMyBirthday = function(dataoggi){
  const myBirth = "1999-10-19";
  const myBirthDate = new Date(myBirth);

  //banalmente, se il mese è uguale, e il giorno è uguale, allora oggi è il mio compleanno
  return dataoggi.getDate() === myBirthDate.getDate() && dataoggi.getMonth() === myBirthDate.getMonth();

}

const datadioggi = new Date();
const trueOrFalse = isTodatMyBirthday(datadioggi);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


const deleteProp = function(oggeto, stringa){
  if (stringa in oggetto) {
    delete oggetto[stringa]; 
  } else {
    return `Errore: La proprietà "${stringa}" non esiste nell'oggetto.`;
  }
}


const oggetto = 
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  };
//esempio positivo
let stringaesercizio11 = "Type"
deleteProp(oggetto, stringaesercizio11)
//esempio negativo
stringaesercizio11 = "nome"
deleteProp(oggetto, stringaesercizio11)


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

//nozioni sul parse trovate su Stackoverflow


//l'idea alla base è creare questo spazio di memoria dove, ciclicamente, andrò a salvare il film piu recente.
//potrei anche usare un qualche tipo di sort ascendente per ordinare i film, però cosi è piu comodo
const newestMovie = function(film){
  let filmpiurecente = film[0]

  for(let i= 0; i< film.length; i++){
    if (parseInt(film[i].Year) > parseInt(filmpiurecente.Year)) {
      filmpiurecente = film[i];
    }
  }
}
//N.B.
//il richiamo alla sottofunzione lo metto in fondo, sotto l'object.



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function(film){
  return numerofilm = film.length;
}


//N.B.
//il richiamo alla sottofunzione lo metto in fondo, sotto l'object.


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlytTheYears = function(film){
  let arrayanni = []
  for(i=0; i<film.length;i++){
    arrayanni[i] = parseInt(film[i].Year)

  }
  return arrayanni;
}


//N.B.
//il richiamo alla sottofunzione lo metto in fondo, sotto l'object.


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

//L'idea alla base è la stessa dell'esercizio 12. l'unico commento è il fatto che l'if si attiva se e solo se il valore in integer
//dell'anno di film, al valore i, è minore id 2000. in tal caso lo salvo in un array di film.
//N.B. l'utilizzo del j è per evitare buchi vuoti, che potrebbero causare numerosi problemi nel caso in cui i film siano magari nell'ordine
//delle migliaia.
const onlyInLastMillennium = function(film){
  let filmprodottonelmillenioscorso = [];
  let j= 0;

  for(i = 0; i<film.length;i++){
    if( parseInt(film[i].Year) < 2000){
      filmprodottonelmillenioscorso[j] = film[i];
      j++;
    }
  }
  return filmprodottonelmillenioscorso;
  
}

//N.B.
//il richiamo alla sottofunzione lo metto in fondo, sotto l'object.


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function(film){
  let sommaanni = 0;

  for(i=0; i<film.length;i++){
    sommaanni = sommaanni + parseInt(film[i].Year);
  }
  return sommaanni;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function(film, stringa){
  let arrayFilmByTitle= [];

  for (let i = 0; i < film.length; i++) {
    //riferimenti trovati su come utilizzare includes e .tolowercase: stackoverflow
      //!commento personale! per il futuro: https://stackoverflow.com/questions/48145432/javascript-includes-case-insensitive#:~:text=Use%20includes()%20method%20to,to%20convert%20it%20to%20lowercase.
    if (film[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      arrayFilmByTitle.push(film[i]); 
    }
  }

  return arrayFilmByTitle; 

}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function(film, stringa){
  let match = []
  let unmatch = []

  let i = 0; // Inizializza l'indice a 0

  //è praticamente uguale a quello fornito sopra.
  //fatto con ciclo while per dare un pò di diversita, era fattibile ugualmente con il ciclo for
    //avrei anche potuto interagire con l'array creato nell'esercizio 17, e in base ai risultati di quello creare l'unmatch,
    //però ho preferito tenerli in "camere separate".
  while (i < film.length) { 
    if (film[i].Title.toLowerCase().includes(stringa.toLowerCase())) {
      match.push(film[i]); 
    } else {
      unmatch.push(film[i]); 
    }
    i++; 
  }

  return { 
    match,
    unmatch }; 
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


//semplicemente creo un array e ci ficco tutti i film, tranne quello = al numero indicato.

const removeIndex = function(film, numero){
  let j= 0;
  let arrayesercizio19 = [];
  if(numero >0 && numero <film.length){
    for(i = 0; i<film.length; i++){
      if(i != numero){
        arrayesercizio19[j] = film[i];
        j++;
      } else{

      }
    }
  } else{
    return null;
  }

  return arrayesercizio19;
 
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
//molto basilare
function selectContainer() {
  const container = document.getElementById('container');
  return container;
}

const selectedContainer = selectContainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const SelezionaTuttiITd = function(){
const TuttiITd = document.querySelectorAll('td'); // Seleziona tutti gli elementi <td>
return TuttiITd; // Restituisce un NodeList contenente tutti gli <td>
}

// Esempio di utilizzo
const TdSelezionati = SelezionaTuttiITd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function StampaTd() {
  const TuttiITd22 = document.querySelectorAll('td'); // Seleziona tutti gli <td>

  
  for (let i = 0; i < TuttiITd22.length; i++) {
    console.log(TuttiITd22[i].textContent); 
  }
}

StampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
// //riferimenti trovati su come inserire un background: shecodes
      //!commento personale! per il futuro: https://www.shecodes.io/athena/51886-how-to-change-the-background-image-in-javascript#:~:text=style.,image%20you%20want%20to%20use.&text=Replace%20'your%2Delement%2Did,image%20you%20want%20to%20use.

  const funzione23 = function(){
    const TuttiGliA = document.querySelectorAll('a'); // Seleziona tutti i link <a>

    for (let i = 0; i < TuttiGliA.length; i++) {
      TuttiGliA[i].style.backgroundColor = 'red'; // Imposta il background color a rosso
    }
  }

  funzione23()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const funzione24 = function(){
  const lista = document.getElementById('myList'); // Seleziona la lista non ordinata
  
  const nuovoOggetto = document.createElement('li'); // Crea un nuovo elemento <li>
  nuovoOggetto.textContent = 'Nuovo Elemento'; // Imposta il testo dell'elemento

  lista.appendChild(nuovoOggetto); // Aggiunge il nuovo <li> alla lista
}

funzione24()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const funzione25 = function(){
  const lista = document.getElementById('myList'); // Seleziona la lista non ordinata
  lista.innerHTML = ''; // Svuota il contenuto della lista
}

funzione25()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const funzione26 = function() {
  const righe = document.getElementsByTagName('tr'); 

  for (let i = 0; i < righe.length; i++) {
    righe[i].classList.add('test'); 
  }
}

funzione26();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function(num){

  for (let i = 1; i <= num; i++) {
    let Riga = '';  
    for (let j = 0; j < i; j++) {
      Riga += '*';  
    }
    console.log(Riga); 
}
}

let numero27 = 5
halfTree(numero27)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const Tree = function(num){
  for (let i = 0; i < num; i++) {
    let row = '';  
    for (let j = 0; j < num - i - 1; j++) {
      row += ' ';
    }
    for (let k = 0; k < (2 * i + 1); k++) {
      row += '*';
    }
      console.log(row);
  }
}
let numero28 = 5;
Tree(numero28)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function(num){
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
}
return num > 1;
}

let numeroprimo = 3;
let risultato29 = isItPrime(numeroprimo)


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
  

 
]


//ESERCIZIO 12 RICHIAMO

newestMovie(movies)

//ESERCIZIO 13 RICHIAMO

const risultatoesercizio13 = countMovies(movies)

//ESERCIZIO 14 RICHIAMO

const risultatoesercizio14 = onlytTheYears(movies)

//ESERCIZIO 15 RICHIAMO
const risultatoesercizio15 = onlyInLastMillennium(movies);

//ESERCIZIO 16 RICHIAMO
const sommatotaleanni = sumAllTheYears(movies);

// ESERCIZIO 17 RICHIAMO
const stringaFilmByTitle = 'Lord'
const risultatoesercizio17 = searchByTitle(movies, stringaFilmByTitle);

//ESERCIZIO 18 RICHIAMO
const stringaFilmEs18 = 'Lord'
const risultatoesercizio18 = searchAndDivide(movies, stringaFilmEs18);

//ESERCIZIO 19 RICHIAMO
const numeroEsercizio19 = 9;
const risultatoesercizio19 = removeIndex(movies, numeroEsercizio19);
