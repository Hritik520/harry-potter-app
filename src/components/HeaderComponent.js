import React from 'react';
import ButtonsComponent from './ButtonsComponent';
import './HeaderComponent.css';

function HeaderComponent() {
  return (
    <header className="header">
      <h1>Harry Potter Characters</h1>
      <ButtonsComponent />
    </header>
  );
}

export default HeaderComponent;
