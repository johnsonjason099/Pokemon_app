import React, { Component } from 'react'

class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        <form action="/pokemon" method = 'post'>
           Name: <input type="text" />
           Image: <input type="" />
        </form>
        </div>
    )
  }
}

export default New 