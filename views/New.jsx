import React, { Component } from 'react'

class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Form</h1>
        <form action="/pokemon" method = 'post'>
           Name: <input type="text" name='name'/> <br />
           Image: <input type="text" name='image'/> <br />
           <input type="submit" value='Create New Pokemon'/>
        </form>
        </div>
    );
  }
}

export default New; 