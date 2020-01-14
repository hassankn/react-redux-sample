import React, { Component } from 'react'

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label><br />
            <input type='text' name='title' value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name='body' value={this.state.body} />
          </div>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform

