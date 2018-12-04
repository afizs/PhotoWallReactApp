import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";

class PhotoWall extends Component {
  render() {
    return (
      <div className="photogrid">
        {this.props.posts.map((post, index) => (
          <Photo
            key={index}
            post={post}
            onRemovePhoto={this.props.onRemovePhoto}
          />
        ))}
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall;
