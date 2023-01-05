window.onload= () =>{
    const listaCrea=document.querySelector(".listConteinerVuoto")
}


const gestisciOnKeyup = event =>{
    console.log("l'utente ha scliccato", event.key)
    // aggiungo che se premo enter succede qualcosa

if(event.key=== "Enter"){
//veriico che l utente ha scritto qualcosa
const valoreImputField = document.querySelector(".crea").value
if( valoreImputField === ""){
    alert("campo vuoto")
}
else {
    //se imput non  vuoto, devo creare dei div con delle classi e portarle sotto
 const newDiv = document.createElement("div")

//mi creo la classe del nuovo div
newDiv.classList.add("listConteiner")
// aggiungo il testo al mio div creato

newDiv.innerHTML = valoreImputField + '<button class="delete" onclick="deleteB()">Delete</button>'
// devo appendere questo div l suo posto
document.querySelector(".listConteinerVuoto").appendChild(newDiv)
// cancello dopo che ho premuto enter
document.querySelector(".crea").value=""
newDiv.onclick= seleziona
}
}
}
function deleteB() {
    

    document.querySelector(".listConteinerVuoto").removeChild(newDiv)
    }

function seleziona (event){
        const eventSelezionato= event.target 
        eventSelezionato.classList.add("selected")
    }
