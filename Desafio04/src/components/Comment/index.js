import React, { Component } from 'react';

import img from '../../assets/profiles/lacerda.png';
import './styles.css';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <a href="http://fb.com"><img src={img} alt="logo"/></a>
        <p><a href="http://fb.com">Victor Lacerda</a>Dizeeeee mlk acho que tu é um cara bem louco em fazer esse tipo de coisa men, que loucura, que viage, tu é mó loco pivete</p>
      </div>
    );
  }

}

export default Comment;