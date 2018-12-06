import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <div className="button-container">
          <Link to="/AddPhoto">ClickMe</Link>
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
