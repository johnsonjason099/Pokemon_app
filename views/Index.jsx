import React,{ Component } from 'react'
 
//Styling start here

//Styling till here

export default class Index extends Component {
render() {
  const {Pokemon} = this.props;
  console.log(Pokemon)
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/new"> Create New Pokemon</a>
                </li>
            </ul>
        </nav>
        <div>
            <p>POKEMON</p>
                <ul>
                    {Pokemon.map((Pokemon) => {
                      return (
                          <li>
                            <a href={`/pokemon/${Pokemon.id}`}> {Pokemon.name}</a>
                              <a href={`/pokemon/${Pokemon.id}/edit`}>Edit {Pokemon.name}</a>
                              <form action={`/pokemon/${Pokemon.id}?_method=DELETE`} method="POST">
                                  <input type="submit" value="Remove Pokemon"/>
                              </form>
                          </li>
                      );
                  })}
              </ul>
          </div>
    </div>
    )
  }   
}
 