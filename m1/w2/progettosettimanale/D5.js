/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1 V
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)
console.log(pets.toString())
*/


/* ESERCIZIO 2 V
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".

console.log(pets.sort())
*/
/* ESERCIZIO 3 V
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.

console.log(pets.reverse())*/

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
 {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]



/* ESERCIZIO 6 V
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let car4 = {
  brand:"nuovo",
  model: 'nuovo',
  color: 'nuovo',
  trims: ['life', 'style', 'r-line']}
cars.push(car4)
console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice( cars[i].trims.length -1, 1);
}
//SECONDO METODO
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
console.log(cars[i].trims)}




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/const justTrims = []
for (let i = 0; i < cars.length; i++) {
  cars[i].trims[0].push(justTrims)}
  console.log(justTrims)



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".

if(cars1.color )
*/
/* ESERCIZIO 9 V
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
] 
/* no
while (numericArray[] <32) {
  console.log(numericArray)
  numericArray= numericArray +1
  if (numericArray === 32) break
}*/
// si
for (i = 0; i < [13]; i++) {
  console.log(numericArray[i])}


/* ESERCIZIO 10 V
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]

const charactersArray = ["g", "n"," u", "z", "d"]
*/
// con la funzione creo una variabile anum e gli assegno ad una lettera un numero.  
function letterValue(str){
  var anum={
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
      l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
      u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  if(str.length== 1) return anum[str] || ' ';
  return str.split('').map(letterValue);}