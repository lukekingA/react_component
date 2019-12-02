import React, { Component } from 'react';
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
            {this.props.comment.authorName}
          </a>
          <div className="metadata">
            <span className="date">{this.props.comment.commentTime}</span>
          </div>
          <div className="text">{this.props.comment.commentDetails}</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
