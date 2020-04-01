import React, { Component } from 'react';

import './styles.css';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <a href="http://fb.com"><img src={this.props.avatar} alt="logo"/></a>
        <p><a href="http://fb.com">{this.props.author}</a>{this.props.content}</p>
      </div>
    );
  }

}

export default Comment;