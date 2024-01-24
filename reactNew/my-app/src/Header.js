import React from 'react';
import backimg from './digi.jpg';
import proimg from './profileicon.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img height="50px" width="50px" src={backimg} alt="logo"/>
      </div>
      <div className="profile">
      <img height="50px" width="50px" src={proimg} alt="logo"/>
      </div>
    </header>
  );
};


export default Header;