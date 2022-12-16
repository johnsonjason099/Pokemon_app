import React, { Component } from 'react'

//Styling begin here

//Styling ending here

export default class New extends Component {
  render() {
    return (
      <div>
        <nav>
        <ul>
          <li><a href="/" className='newButton'>Head Back</a></li>
        </ul>
        </nav>
        <div>
        <h1>New Pokemon Form</h1>
        <form action="/pokemon" method = 'post'>
           Name: <input type="text" name='name'/> <br />
           Image: <input type="text" name='image'/> <br />
           <input type="submit" name="" value='Create New Pokemon'/>
        </form>
        </div>
      </div>
    );
  }
}

