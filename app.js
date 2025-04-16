//importazione di express
const express = require("express");

//inizializzo express dentro la variabile app
const app = express();

//definizione del numero di porta
const port = 3000;

//impostazione dello strumento per recuperare gli asset statici


//definizione della rotta base
app.get("/", (req,res) => {

res.send("Benvenuti nel mio blog")

})

//inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () => {


    console.log(`Server del blog in ascolto alla porta ${port}`)
})
