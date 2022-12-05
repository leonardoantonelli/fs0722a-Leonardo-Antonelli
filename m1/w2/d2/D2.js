/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let numero= 3 //let apre la variabile e all'interno posso scrivere tutti i numeri senza pero doverci mettere gli apici, altrimenti diventa una stringa

// la variabile stringa invece la riconsco pechè ha gli apici
let stringa= "ciao"
//ci osno i boolenani che sono devve variabili che mi restituiscon solo due valori true o false

let boleoano= true
let boleoano2= false
// variabile undifinf la riconsoco perchè è una variabile che non descrive nulla

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
 */

/* SCRIVI QUI LA TUA RISPOSTA */
 let nome= "leo"
 console.log(nome)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12
let n2 = 20
let somma= n1 + n2

console.log("la somma di questi numeri è:" + somma)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x=12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
//se richiamo la variabile e assegno un nuovo nome posso vederla in console mentre se creao un costante questa non può essere cambiata
nome= "antonelli"
console.log(nome)
const name= "leo"

//mi da errore se reimposto il name name= "antonelli"console.log(name)


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let differenza= 4 - x
console.log(differenza)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1= "jhon"
let name2= "John"
let confronto= name1 === name2
console.log(confronto)
let confronto2= name1.toLowerCase == name2.toLowerCase
console.log(confronto)
console.log(name2.toUpperCase)
