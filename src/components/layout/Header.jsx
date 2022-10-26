import '../../styles/layout/Header.scss'
import React from 'react'
import Button from '../common/Button'

function Header() {
  return <section id='header'>
    <div id='text'>
      <h1 id='company-name'>Shortly</h1>
      <div id='urls'>
        <h2>Features</h2>
        <h2>Pricing</h2>
        <h2>Resources</h2>
      </div>
    </div>

    <div id='buttons'>
      <Button id={'login'} text={"Login"} />
      <Button id={'sign-up'} text={"Sign Up"} />
    </div>
  </section>
  
  
}

export default Header