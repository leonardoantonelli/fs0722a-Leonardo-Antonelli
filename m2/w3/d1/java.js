let nome = document.getElementById("nome")
let cognome= document.getElementById("cognome")
let eta= document.getElementById("eta")
let button= document.getElementById("button")
let testodainserire = document.getElementById("testodainserire")

const Person = function(nome, cognome, eta) {
this.nome=nome;
this.cognome= cognome;
this.eta=eta;
}


button.onclick= function (){
   
    const actual= new Person(nome.value, cognome.value,eta.value)
    testodainserire.innerHTML= `<table>
    <tr>
    <th>${actual.nome}</th>
    <th>${actual.cognome}</th>
    <th>${actual.eta}</th>
  </tr>
 </table>`
}

