import React, { Component } from 'react';

import './styles.css';
import logoImg from '../../assets/logo.png';
import profileIcon from '../../assets/profileIcon.png';

class Header extends Component {

  render() {
    return (
      <div className="topbar">
        <a className="logoLink" href="https://www.facebook.com">
          <img className="logoImg" src={logoImg} alt="logo" />
        </a>
        <a className="profileLink" href="https://www.facebook.com">
          Meu perfil
          <img className="profileImg" src={profileIcon} alt="profile icon" />
        </a>
      </div>
    );
  };

}

export default Header;