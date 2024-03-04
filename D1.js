console.log("JavaScript exercise day 1");
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*1 Stringa: sono valori formati da uno o più caratteri alfa numerici, devono essere comprese all'interno di apici che siano apostrofi o virgolette 
non c'è differenza, l'importante è iniziare e terminare la stringa usando lo stesso apice adottato all'inizio. 

  2 Numeri: sono valori formati da numeri,non c'è bisogno di apici e possono essere sia interi che decimali, il numero decimale si definisce 
  usando il punto.
  
  3 Booleano: accetano solo i valori true e false
  
  4 null: utilizzato per definire che non è stato attribuito nessun valore alla variabile che ho dichiarato
  
  5 undefined: utilizzato per dare un valore ancora non definito alla variabile*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName= 'Gabriele'*/
let myName = "Gabriele";
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let number1= 12 
   let number2= 20
   console.log(number1 +number2) */
let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x= 12 */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const : rappresenta una variabile alla quale viene asseganto un valore che sarà impossibile modificare,
nel caso in cui si prova da errore
   myName = 'Costantini'
   
   const costante = 15;
costante = 15.1; // errore*/

myName = "Costantini";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let number5 = 4 - x;
console.log(number5);*/
let number5 = 4 - x;
console.log(number5);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* let "name1" = 'john'
   let "name2" = 'John'
   console.log( name1 === name2)
   
   EXTRA:
   let lowercase = name2;
console.log(name2 === lowercase);*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);

let lowercase = name2;
console.log(name2 === lowercase);
