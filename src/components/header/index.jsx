import React, { useNavigate } from 'react-router-dom';
import Head from './style';
// import Menu from '../menu';
const Header = () => {
  const navigator = useNavigate();
  // const [menuOpen, setMenuOpen] = useState(false)
  const handleLogout = () => {
    navigator('/');
  } 
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
