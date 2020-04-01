import React, { Component } from 'react';

import './styles.css';

import Comment from '../Comment';

class Post extends Component {

  render() {

    return (
      <div className="post">
        <div className="user">
          <a href="http://fb.com">
            <img src={this.props.avatar} alt="profile image"/>
          </a>
          <div>
            <a href="http://fb.com">
              <p className="name">{this.props.name}</p>
            </a>
            <p className="date">{this.props.date}</p>
          </div>
        </div>
        <p className="message">{this.props.content}</p>
        {this.props.comments.map(comment => (
          <Comment 
            key={comment.id} 
            avatar={comment.author.avatar} 
            content={comment.content}
            author={comment.author.name}
          />
        ))}
        
      </div>
    );
  }

}

export default Post;