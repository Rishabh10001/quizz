import React, { useEffect, useState } from 'react';
import Head from './style';
// import Menu from '../menu';
const Header = () => {

  // const [menuOpen, setMenuOpen] = useState(false)
  
  // useEffect(() => {
  //   window.document.body.addEventListener('click',(e) => {
  //     if(e.target.nodeName === "INPUT" || e.target.nodeName === "NAV"){

  //     }else{
  //       // if(e.target.classList.contains('hamburgerMenu')){
  //         setMenuOpen(false)
  //       // }
  //     }
  //   })
  // },[])

  return (
    <Head>
        {/* {
          menuOpen && <Menu setMenuOpen={setMenuOpen} />
        }
        <input type="button" value={menuOpen ? "X" : "="} onClick={e => setMenuOpen(!menuOpen)} /> */}


        <h1>QUIZ APP</h1>
    </Head>
  )
}

export default Header
