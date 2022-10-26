import '../../styles/layout/Top.scss'
import React from 'react'
import Button from '../common/Button'
import working from '../../media/images/illustration-working.svg'

function Top() {
    return <section id='top'>
        <div id='top-container'>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button id={'get-started'} text={"Get Started"} />
        </div>

        <div id='top-img'>
            <img src={working}/>    
        </div>
    </section>


}

export default Top