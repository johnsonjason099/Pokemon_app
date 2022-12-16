import React, { Component } from 'react'


//Styling here

//Styling until here
export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props.Pokemon);
    return (
      <div>
        <nav>
        <ul>
           <li><a href="/" className="newButton"> Go Back</a>
           </li>
        </ul>
          </nav>
            <div>
            <h1>Edit Pokemon</h1>
            <form action={`/pokemon/$(pokemon._id}?_method=PUT`} method="POST">
              Name: <input type="text" name="name" defaultValue={pokemon.name} /><br />
              Image: <input type="text" name="img" defaultValue={pokemon.img} /><br />
            <input type="submit" value="Submit Changes" />
            </form>
            </div>
        </div>
    )
  }
}

