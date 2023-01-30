let nome = document.getElementById("nome")
let cognome= document.getElementById("cognome")
let eta= document.getElementById("eta")
let button= document.getElementById("button")
let testodainserire = document.getElementById("testodainserire")

const Person = function(nome, cognome, eta) {
this.nome=nome;
this.cognome= cognome;
this.eta=eta;

generateReport() {
    return (
        `Ciao! la differenza d'età tra ${ this.nome} e ${ this.nome} è di
          +
      this.squaredMeters +
      ' metri quadrati e ho ' +
      this.numberOfRooms +
      ' camere.`
    )
  }

}