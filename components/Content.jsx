import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
          <input />
          <label>Email: </label>
          <input />
          <label>Phone Number: </label>
          <input />
          <button>Edit</button>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Content;
