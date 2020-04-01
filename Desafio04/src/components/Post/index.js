import React, { Component } from 'react';

import './styles.css';
import profImg1 from '../../assets/profiles/diego.png';
import profImg2 from '../../assets/profiles/lacerda.png';
import Comment from '../Comment';

class Body extends Component {

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
        <Comment key={this.props.commentId}/>
      </div>
    );
  }

}

export default Body;