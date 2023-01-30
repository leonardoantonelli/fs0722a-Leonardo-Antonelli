const esercizioFetch = function(){
    fetch ("https://striveschool-api.herokuapp.com/books")
    .then(function (res) {
       console.log ("andato bene il fecth, res è il mio parametro degli array", res)  

       if (res.ok) {
        
        return res.json()
        // trasformo il body in un oggetto
      } 
      else {
        // se abbiamo problemi
        console.log('Qualcosa è andato storto')
      }
    })
    .then(function (data) {
        console.log(data)})
        // vedo in console tutti i libri
       
}


const getlibreria = async function () {
    try {
     
      let libreria = await fetch("https://striveschool-api.herokuapp.com/books")
      // res è utilizzabile! 
      console.log(" ha caricato la" , libreria);
      if (libreria.ok) {
        let libri = await libreria.json();
        console.log( libri)
        let listReference = document.querySelector('.container')

        libri.forEach(el => {
            let col= document.createElement("div")
            col.classList.add("col-3")
            
            col.innerHTML=  `
            <div class="card my-4 mx-3 " id="oggettodaca" >
  <img src="${el.img}" class="card-img-top heightimg" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" onclick="remove(oggettodaca) class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `
            listReference.appendChild(col) })
        }else {
                // finiremo qui se la chiamata ha contattato il server, ma c'è stato
                // un problema nella risposta!
                console.log('Qualcosa è andato storto con la nostra chiamata!')
              }

            } catch (error) {
                // finiremo qui se c'è stato un problema a monte, nel contattare il server!
                // ad es. un errore di rete, modalità aereo, etc.
                console.log(error)
              }
            }
  



  getlibreria()

  const remove = function(){
    let card= document.getElementById("oggettodaca");
    card.innerHTML=""
}
remove()
