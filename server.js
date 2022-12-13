const express = require('express');
const pokemon = require("./models/pokemon");
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/',(req, res) => {
     res.send(`Welcome to the Pokemon App`);
 });

 //Index
 app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon});
 });

 //Show
 app.get('/pokemon/:id', (req,res) => {
    res.render("Show",{pokemon: pokemon[req.params.id]});
});


app.listen(3000, () => {
    console.log("Server running on 3000");
});
