import React, { Component } from 'react'

class Edit extends Component {
  render() {
    return (
        <DefaultLayout title="Edit Page">
        <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method='POST'>
           Name: <input type="text" name='name' defaultValue={this.props.fruit.name}/> <br />
           Image: <input type="text" name='image' defaultValue={this.props.fruit.image}/> <br />
           <input type="submit" value='Submit Changes'/>
        </form>
        </DefaultLayout>
    )
  }
}

module.exports= Edit;