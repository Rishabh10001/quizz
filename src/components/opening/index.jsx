import React from 'react';
import './style.scss'
const Opening = () => {
  return (
    <div>
      <nav class="nav">
      <input type="checkbox" class="nav__cb" id="menu-cb"/>
      <div class="nav__content">
        <ul class="nav__items">
          <li class="nav__item">
            <span class="nav__item-text">
              <a href='/signup'>SignUp</a>
            </span>
          </li>
          <li class="nav__item">
            <span class="nav__item-text">
              <a href='/login'>Login</a>
            </span>
          </li>
        </ul>
      </div>
      <label class="nav__btn" for="menu-cb"></label>
      </nav>
    </div>
  )
}

export default Opening
