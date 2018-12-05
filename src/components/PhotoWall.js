import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <div className="button-container">
          <a onClick={this.props.onAddPhoto} href="#AddPhoto">
            ClickMe
          </a>
        </div>
        <br />
        <div className="photogrid">
          {this.props.posts.map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={this.props.onRemovePhoto}
            />
          ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall;
