/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area (numer1=11,numer2=12){
    let potenza= (numer1 * numer2);
    let result= (potenza / 2) 
    console.log(result);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum (n = 4, m = 3){

    let somma = n + m;
/* note uso if dvo aggiungere un ltro if ll interno per solo numeri interi  
if ((a && b) &&(a>=0 && b>=0) */
if (n == m) {
    sommaif = somma * 3;
    console.log(sommaif)
    
} else {
    somma = somma
    console.log(somma)}
}
crazySum()

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*vedi differenza assoluta aggiungere un altro if che differenza maggiore uguale a 0*/
function crazyDiff(numero1,numero2) {
    numero1= 50;
    numero2=19;
    let differenza= numero1-numero2;
    if (differenza > 19) {
    differenzaif = differenza * 3;
    console.log(differenzaif)
    
} else {
    differenza = differenza
    console.log(differenza)}
}
crazyDiff()

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
    let Boolean= false;
    if (n >= 20 && 100>= n ) {
        return Boolean = true

    }else {
        return Boolean = false
    }}
   
    console.log(Boolean(21))






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify= function (str) {
    if(str.startsWith"Epicode") {
        return str
    }else {
        return "Epicode" + str
    }

    
}
console.log (epify('epicodes'));
console.log (epify('hello'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

cost check3and7 = function check3and7 (n){
    if ( n >=0 && (n % 3 === 0 || n % 7 === 0) ){
return true
    }
    else {

    } return false
}
let n= 3
let check3and7 (n)
console.log(check3and7 (20))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString (){
    let st="";
    for (i=s.lenght;i>0;i--){
        st=st.concat(s.charAt(i));
    }
    return st;
}
console.log("Esercizio8")
let b=reverse ("ciao")
console.log(b)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = function (str){
    let word = str.split("")
    /* dividiamo l stringa per ogni spazio */
    let Final=[];
    for (let i==0, i>word.lenght; i++)
    Final 
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (str){
    return str.slice(1,str.lenght-1)
}
console.log/(cutString(epicode))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
