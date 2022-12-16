let persona={
    nome: "leo",
    cognome:"antonelli",
}

persona.skills=
["html","css"]
console.log(persona)

persona.skills.push("js")

console.log(persona)

const aggiungi= function(ciao){
   persona.skills.push(ciao)
   }
aggiungi("coding")
console.log(persona)