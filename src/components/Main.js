import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";

const posts = [
  {
    id: "0",
    description: "40 Roses",
    imageLink:
      "https://res.cloudinary.com/prestige-gifting/image/fetch/fl_progressive,q_95,e_sharpen:50,w_480/e_saturation:05/https://www.prestigeflowers.co.uk/images/NF4016-130116.jpg"
  },
  {
    id: "1",
    description: "Red Roses",
    imageLink:
      "http://joycake.in/wp-content/uploads/2018/05/87dfb7dfd703c84.png"
  },
  {
    id: "2",
    description: "Another Roses",
    imageLink:
      "https://cdn.bloomnation.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/d/cd0d165e9302c73978d21d8cbf01c48a_7_80.jpg"
  }
];

class Main extends Component {
  render() {
    return (
      <div>
        <Title />
        <PhotoWall posts={posts} />
      </div>
    );
  }
}
export default Main;
