import React from 'react';
import Head from './style';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigator = useNavigate();
  // const navigate = useNavigate()
  const handleLogout = () => {
    navigator('/');
  } 

  return (
    <Head>
        QUIZ APP
        <input
          type="button"
          className='Button'
          value='Logout'
          onClick={ handleLogout }
        />
    </Head>
  )
}

export default Header
