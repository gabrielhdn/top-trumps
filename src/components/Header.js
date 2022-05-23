import React from 'react';
import './Header.css';
import logo from '../images/Logo1.png';

class Header extends React.Component {
  render() {
    return (
      <div className='title-container'>
        <span className='main-title'>assassin's</span>
        <img src={logo} alt='AC Logo' className='logo'/>
        <span><strong>trunfo</strong></span>
      </div>
    );
  }
}

export default Header;