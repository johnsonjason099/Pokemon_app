require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');
const methodOverride = require('method-override');



//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//connect to mongoose and remove depriciation
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
    //find all pokemon
    Pokemon.find({}, (error, allPokemon)=>{
        res.render("Index", {pokemon: allPokemon});
    })
 
});

 //NEW ROUTE
 app.get('/pokemon/new', (req, res) => {
    res.render('New');
 });
 


//Create route
app.post('/pokemon', (req, res) =>{
    Pokemon.create(req.body, (error, newPokemon) => {
        res.redirect('/pokemon');
    })
})

 //Show
 app.get('/pokemon/:id', (req,res) => {
   Pokemon.findById(req.params.id,(err, foundPokemon) => {
    res.render('Show', {
        pokemon: foundPokemon,
    })
   })
   })
//EDIT
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
       if(!err){
        res.render('pokemon/Edit', {
            pokemon: foundPokemon
        }
    );
} else {
    res.send({ msg: err.message })
}
});
});
//UPDATE/POST
app.put('/pokemon/:id', (req, res)=>{
    //find pokemon and update
    //redirect to pokemon show page
       
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
console.log(updatedFruit);
        })
            res.redirect('/pokemon/${req.params.id}');
        });

//DELETE/DESTROY
app.delete('/pokemon/:id', (req, res)=>{
Pokemon.findByIdAndRemove(req.params.id, (err, foundPokemon)=>{
res.redirect("/pokemon");
    });
});



//Server listener
app.listen(3000, () => {
    console.log("Server running on 3000");
});
