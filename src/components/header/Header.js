import React from 'react';
import headerLogo from '../../images/header-logo.svg';

function Header(){
  return(
    <header className="header page__header">
      <img src={headerLogo} alt="Логотип" className="header__logo" />
    </header>
  )
}


export default Header;