//importazione di express
const express = require("express");

//inizializzo express dentro la variabile app
const app = express();

//definizione del numero di porta
const port = 3000;

//impostazione dello strumento per recuperare gli asset statici
app.use(express.static("public"));

//definizione della rotta base
app.get("/", (req, res) => {

    res.send("Benvenuti nel mio blog");

})

app.get("/Bacheca", (req, res) => {
    const Bacheca = [
        {
            title: "ciambellone",
            content: "morbida torta con un buco al centro",
            img: "public/img/ciambellone.jpeg",
            tags: ["morbidezza", "fattoincasa", "dolcezza"]
        }, {
            title: "cracker alla barbabietola",
            content: "croccante cracker di barbabietola con mix di semi",
            img: "public/img/cracker_barbabietola.jpeg",
            tags: ["croccantezza", "snack", "merenda"]
        }, {
            title: "pane fritto dolce",
            content: "pane raffermo fritto con aggiunta di zucchero",
            img:"public/img/pane_fritto_dolce.jpeg",
            tags: ["ricettediunavolta", "ricordi", "fattoincasa"]
        }, {
            title: "pasta di barbabietola",
            content: "semplice pasta fatta con la barbabietola",
            img:"public/img/pasta_barbabietola.jpeg",
            tags: ["classico", "evergreen",]
        }, {
            title: "torta paesana",
            content: "pane raffermo con l'aggiunta di cacao,uvetta e amaretti",
            img:"public/img/torta_paesana.jpeg",
            tags: ["ricettadellanonna", "merenda"]
        }
    ]
    res.json(Bacheca);
})

//inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () => {


    console.log(`Server del blog in ascolto alla porta ${port}`);
})
