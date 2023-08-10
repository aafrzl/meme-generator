import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <img className='header__img' src="/troll-face.svg" alt="Problem?" />
      <h2 className='header__title'>Meme generator</h2>
      <h4 className='header__project'>React Course - Project 3</h4>
    </header>
  );
}
