import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#0000000',
};

const Show = ({pokemon}) => {
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice()}
            </h2>
            <img src={`${pokemon.img}.jpg`} alt="Pokemon" />
            <a href="/pokemon">Back</a>
        </div>
    );
};

export default Show;