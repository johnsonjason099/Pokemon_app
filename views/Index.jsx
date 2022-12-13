import React from 'react'

const headerStyle = {
    background: "purple"
}

const myStyle = {
    color: 'gold',
    backgroundColor: 'grey',
    padding: "10px",
    fontFamily: "Helvetica"
};

const bodyStyle = {
    backgroundImage: `url(data:image/jpeg;base64,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)`,
    backgroundSize: 'cover',
    overflow: 'hidden'

}

const Index = ({pokemon}) => {
    return (
        
      <div style={myStyle}>
           {pokemon.map((pokemon, i)=>{ 
              return(
              <div>
              <a href={`pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice()}</a>
              </div>
              )
           })}
   
      </div>
    )
  }
  


export default Index
