import '../../styles/layout/Header.scss'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Button from '../common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function mobileMenu() {
  document.getElementById("header-items").classList.toggle("active")
  
}


function Header() {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    const header = document.getElementById("header-items");
    if (innerWidth > 767 && header?.classList.contains('active'))
    {
      header.classList.remove("active")
    }
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {

      setWindowSize(getWindowSize());

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window]);
  
  return <section id='header'>
    <div id='text'>
      <h1 id='company-name'>Shortly</h1>
      <button id='mobile-icon' onClick={mobileMenu}><FontAwesomeIcon  icon={faBars} /></button>
      <div id='header-items'>
      <div id='urls'>
        <h2>Features</h2>
        <h2>Pricing</h2>
        <h2>Resources</h2>
      </div>
    
    <div id='buttons'>
      <Button id={'login'} text={"Login"} />
      <Button id={'sign-up'} text={"Sign Up"} />
    </div>
    </div>
    </div>
  </section>
  
  
}



export default Header