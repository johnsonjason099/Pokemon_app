import React from 'react'
import pokemon from '../models/pokemon'
const headerStyle = {
    background: "black"
}

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

function Index({pokemon}) {
  return (
    <div>
    <h1 style ={myStyle}>See All The Pokemon!</h1>        
    
            {pokemon.map((pokemon, i) => {
                return(
           
                    <a href= {`/pokemon/${i}`}> 
                    {pokemon.name}
                    </a>
        
                )
            })}
    
    </div>
  )
  }

module.export = Index;
