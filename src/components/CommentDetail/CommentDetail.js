import React, { Component } from "react";
import faker from "faker";

class CommentDetail extends Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Bill
          </a>
          <div className="metadata">
            <span className="date">Today @ 6:00PM</span>
          </div>
          <div className="text">Ehhhh.</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
