import React from 'react';
import pokemon from "../models/pokemon";

//Styling start here
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#0000000',
};
//Styling until here

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
        <div>
            <ul>
                <li> <a href="/">Back</a>
                </li>
            </ul>
            <div>    
                <h1>Gotta Catch 'Em All</h1>
                <h2 className='pokeName'>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name}></img>
                <br />
                <br />
            </div>
        </div>
        )
    }
}
export default Show;