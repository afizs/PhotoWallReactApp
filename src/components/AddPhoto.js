import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleAddPhoto = this.handleAddPhoto.bind(this);
  }

  handleAddPhoto(event) {
    event.preventDefault();
    const post = {
      imageLink: event.target.elements.link.value,
      description: event.target.elements.description.value,
      id: 0
    };
    this.props.onAddPhoto(post);
  }

  render() {
    return (
      <div>
        <h1>Add Photos</h1>
        <div className="form">
          <form onSubmit={this.handleAddPhoto}>
            <input type="text" placeholder="Link " name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button>Post</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddPhoto;
