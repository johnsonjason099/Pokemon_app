const express = require('express');
const pokemon = require("./models/pokemon");
const app = express();
const mongoose = require('mongoose');


//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

//connect to mongoose and remove depriciation
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiesTopology: true
})
mongoose.connection.once('open', ()=>{
    console.log('connected to MONGO');
});

//INDEX
app.get('/',(req, res) => {
         res.send(`Welcome to the Pokemon App`);
 });

 //Index
 app.get("/pokemon", (req, res) => {
    res.render("Index", {pokemon: pokemon});
 });

 //NEW ROUTE
 app.get('/pokemon/new', (req, res) => {
    res.render('New');
 });
 


 //Show
 app.get('/pokemon/:id', (req,res) => {
    res.render("Show",{pokemon: pokemon[req.params.id]});
});


app.listen(3000, () => {
    console.log("Server running on 3000");
});
